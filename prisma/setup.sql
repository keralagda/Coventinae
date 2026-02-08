-- Enable Row Level Security
ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Post" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ContactInquiry" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Consultation" ENABLE ROW LEVEL SECURITY;

-- 1. Automated Timestamp Trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updatedAt triggers to all tables with the column
DO $$
DECLARE
    t text;
BEGIN
    FOR t IN 
        SELECT table_name FROM information_schema.columns 
        WHERE column_name = 'updatedAt' 
        AND table_schema = 'public'
    LOOP
        EXECUTE format('DROP TRIGGER IF EXISTS trg_update_timestamp ON %I', t);
        EXECUTE format('CREATE TRIGGER trg_update_timestamp BEFORE UPDATE ON %I FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();', t);
    END LOOP;
END;
$$;

-- 2. RLS Policies
-- NOTE: These policies are designed to work with Neon Auth/JWT.
-- When using Prisma (Direct Connection), RLS is bypassed by the owner role.

-- Posts Policies
DROP POLICY IF EXISTS "Posts are viewable by everyone" ON "Post";
CREATE POLICY "Posts are viewable by everyone" ON "Post"
FOR SELECT USING (published = true);

DROP POLICY IF EXISTS "Admins can manage all posts" ON "Post";
CREATE POLICY "Admins can manage all posts" ON "Post"
FOR ALL USING (true); -- Placeholder for Admin Check

-- Consultations Policies (Admin Only)
DROP POLICY IF EXISTS "Admins can view consultations" ON "Consultation";
CREATE POLICY "Admins can view consultations" ON "Consultation"
FOR ALL USING (true); -- Placeholder for Admin Check

-- 3. Utility Functions
CREATE OR REPLACE FUNCTION get_active_users_count()
RETURNS integer AS $$
BEGIN
    RETURN (SELECT count(*) FROM "User");
END;
$$ language 'plpgsql';
