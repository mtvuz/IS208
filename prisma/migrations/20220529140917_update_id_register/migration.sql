-- AlterTable
CREATE SEQUENCE "register_id_seq";
ALTER TABLE "Register" ALTER COLUMN "id" SET DEFAULT nextval('register_id_seq');
ALTER SEQUENCE "register_id_seq" OWNED BY "Register"."id";
