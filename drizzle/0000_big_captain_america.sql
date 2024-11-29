CREATE TABLE IF NOT EXISTS "user-table" (
	"id" integer PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"is_admin" boolean NOT NULL,
	"profession" text NOT NULL,
	"bussiness_details" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "user-table_email_unique" UNIQUE("email")
);
