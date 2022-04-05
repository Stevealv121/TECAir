-- Table: public.ROUTE

-- DROP TABLE IF EXISTS public."ROUTE";

CREATE TABLE IF NOT EXISTS public."ROUTE"
(
    "Route Code" bigint NOT NULL,
    "Origin" text COLLATE pg_catalog."default" NOT NULL,
    "Destination" text COLLATE pg_catalog."default" NOT NULL,
    "Year" bigint NOT NULL,
    "Month" bigint NOT NULL,
    "Day" bigint NOT NULL,
    "Hours" bigint NOT NULL,
    "Minutes" bigint NOT NULL,
    CONSTRAINT "ROUTE_pkey" PRIMARY KEY ("Route Code")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."ROUTE"
    OWNER to postgres;