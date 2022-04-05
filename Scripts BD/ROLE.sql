-- Table: public.ROLE

-- DROP TABLE IF EXISTS public."ROLE";

CREATE TABLE IF NOT EXISTS public."ROLE"
(
    "Name" text COLLATE pg_catalog."default" NOT NULL,
    "Description" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "ROLE_pkey" PRIMARY KEY ("Name")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."ROLE"
    OWNER to postgres;