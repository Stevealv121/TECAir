-- Table: public.PROMOTION

-- DROP TABLE IF EXISTS public."PROMOTION";

CREATE TABLE IF NOT EXISTS public."PROMOTION"
(
    "Promotion Code" bigint NOT NULL,
    "Description" text COLLATE pg_catalog."default" NOT NULL,
    "Tittle" text COLLATE pg_catalog."default" NOT NULL,
    "Day" bigint NOT NULL,
    "Month" bigint NOT NULL,
    "Year" bigint NOT NULL,
    "Discount" bigint NOT NULL,
    CONSTRAINT "PROMOTION_pkey" PRIMARY KEY ("Promotion Code")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."PROMOTION"
    OWNER to postgres;