-- Table: public.Books

-- DROP TABLE IF EXISTS public."Books";

CREATE TABLE IF NOT EXISTS public."Books"
(
    "User Id" bigint NOT NULL,
    "Flight Id" bigint NOT NULL,
    CONSTRAINT "Flight Id" FOREIGN KEY ("Flight Id")
        REFERENCES public."FLIGHT" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "User Id" FOREIGN KEY ("User Id")
        REFERENCES public."USER" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Books"
    OWNER to postgres;