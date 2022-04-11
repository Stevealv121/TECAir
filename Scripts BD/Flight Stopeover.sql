-- Table: public.Flight Stopover

-- DROP TABLE IF EXISTS public."Flight Stopover";

CREATE TABLE IF NOT EXISTS public."Flight Stopover"
(
    "Flight Id" bigint NOT NULL,
    "Stopover" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Flight Id" FOREIGN KEY ("Flight Id")
        REFERENCES public."FLIGHT" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Flight Stopover"
    OWNER to postgres;