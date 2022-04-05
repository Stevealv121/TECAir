-- Table: public.FLIGHT

-- DROP TABLE IF EXISTS public."FLIGHT";

CREATE TABLE IF NOT EXISTS public."FLIGHT"
(
    "Id" bigint NOT NULL,
    "boarding Gate" bigint NOT NULL,
    "Price" bigint NOT NULL,
    "Status" boolean NOT NULL,
    "Route Code" bigint NOT NULL,
    "Airplane Plate" text COLLATE pg_catalog."default",
    CONSTRAINT "FLIGHT_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Airplane Plate" FOREIGN KEY ("Airplane Plate")
        REFERENCES public."AIRPLANE" ("Plate") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "Route Code" FOREIGN KEY ("Route Code")
        REFERENCES public."ROUTE" ("Route Code") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."FLIGHT"
    OWNER to postgres;