-- Table: public.Has

-- DROP TABLE IF EXISTS public."Has";

CREATE TABLE IF NOT EXISTS public."Has"
(
    "Baggage Id" bigint NOT NULL,
    "User Id" bigint NOT NULL,
    "Price" bigint NOT NULL,
    CONSTRAINT "Baggage Id" FOREIGN KEY ("Baggage Id")
        REFERENCES public."BAGGAGE" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "User Id" FOREIGN KEY ("User Id")
        REFERENCES public."USER" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Has"
    OWNER to postgres;