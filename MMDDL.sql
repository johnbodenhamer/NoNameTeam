CREATE DATABASE MagnificentMushroom;

CREATE TABLE CUSTOMER(
		customer_id integer PRIMARY KEY,
		name char,
		email char,
		password char,
		phone char,
);

CREATE TABLE ORDER(
		order_id integer PRIMARY KEY,
		order_date date NOT NULL,
		order_time date NOT NULL,
		total_amount numeric NOT NULL,
		payment_type char NOT NULL,
);

CREATE TABLE PAYMENT(
		payment_number integer PRIMARY KEY,
		payment_method char NOT_NULL REFERENCES ORDER (payment_type),
		amount integer NOT_NULL REFERENCES ORDER (total_amount),
		name char NOT_NULL,
		cc_num char NOT_NULL,
		exp_date char NOT_NULL,
		security_code numeric NOT_NULL,
		card_type char NOT NULL,
);

CREATE TABLE ITEM(
		item_num integer PRIMARY KEY,
		item_name char NOT_NULL,
		item_desc char NOT_NULL,
		item_price numeric NOT_NULL,
);