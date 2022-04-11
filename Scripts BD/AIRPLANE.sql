-- Table: public.AIRPLANE

-- DROP TABLE IF EXISTS public."AIRPLANE";

CREATE TABLE IF NOT EXISTS public."AIRPLANE"
(
    "Plate" text COLLATE pg_catalog."default" NOT NULL,
    "Model" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "AIRPLANE_pkey" PRIMARY KEY ("Plate")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."AIRPLANE"
    OWNER to postgres;