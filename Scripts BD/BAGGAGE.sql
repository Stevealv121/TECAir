-- Table: public.BAGGAGE

-- DROP TABLE IF EXISTS public."BAGGAGE";

CREATE TABLE IF NOT EXISTS public."BAGGAGE"
(
    "Id" bigint NOT NULL,
    "Color" text COLLATE pg_catalog."default" NOT NULL,
    "Weight" bigint NOT NULL,
    CONSTRAINT "BAGGAGE_pkey" PRIMARY KEY ("Id")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."BAGGAGE"
    OWNER to postgres;