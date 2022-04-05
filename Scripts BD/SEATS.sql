-- Table: public.SEATS

-- DROP TABLE IF EXISTS public."SEATS";

CREATE TABLE IF NOT EXISTS public."SEATS"
(
    "Id" bigint NOT NULL,
    "Description" text COLLATE pg_catalog."default" NOT NULL,
    "State" boolean NOT NULL,
    "User Id" bigint,
    "Airplane Plate" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "SEATS_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Airplane Plate" FOREIGN KEY ("Airplane Plate")
        REFERENCES public."AIRPLANE" ("Plate") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "User Id" FOREIGN KEY ("User Id")
        REFERENCES public."USER" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."SEATS"
    OWNER to postgres;