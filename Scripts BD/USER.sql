-- Table: public.USER

-- DROP TABLE IF EXISTS public."USER";

CREATE TABLE IF NOT EXISTS public."USER"
(
    "Id" bigint NOT NULL,
    "Email" text COLLATE pg_catalog."default" NOT NULL,
    "First Name" text COLLATE pg_catalog."default" NOT NULL,
    "Second Name" text COLLATE pg_catalog."default",
    "First Surname" text COLLATE pg_catalog."default" NOT NULL,
    "Second Surname" text COLLATE pg_catalog."default",
    "Phone " bigint NOT NULL,
    "University" text COLLATE pg_catalog."default",
    "Student Id" bigint,
    "Role Name" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "USER_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Role Name" FOREIGN KEY ("Role Name")
        REFERENCES public."ROLE" ("Name") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."USER"
    OWNER to postgres;
-- Index: fki_Role Name

-- DROP INDEX IF EXISTS public."fki_Role Name";

CREATE INDEX IF NOT EXISTS "fki_Role Name"
    ON public."USER" USING btree
    ("Role Name" COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;