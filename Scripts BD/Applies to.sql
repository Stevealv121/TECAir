-- Table: public.Applies to

-- DROP TABLE IF EXISTS public."Applies to";

CREATE TABLE IF NOT EXISTS public."Applies to"
(
    "Flight Id" bigint NOT NULL,
    "Promotion Code" bigint NOT NULL,
    "Final Price" bigint,
    CONSTRAINT "Flight Id" FOREIGN KEY ("Flight Id")
        REFERENCES public."FLIGHT" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Promotion Code" FOREIGN KEY ("Promotion Code")
        REFERENCES public."PROMOTION" ("Promotion Code") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Applies to"
    OWNER to postgres;