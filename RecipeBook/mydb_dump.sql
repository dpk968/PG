--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ratings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ratings (
    id integer NOT NULL,
    recipe_id integer,
    user_id text,
    rating integer NOT NULL,
    CONSTRAINT ratings_rating_check CHECK (((rating >= 0) AND (rating <= 5)))
);


ALTER TABLE public.ratings OWNER TO postgres;

--
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ratings_id_seq OWNER TO postgres;

--
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- Name: recipes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipes (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    ingredients text NOT NULL,
    steps text NOT NULL,
    image_url character varying(255)
);


ALTER TABLE public.recipes OWNER TO postgres;

--
-- Name: recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipes_id_seq OWNER TO postgres;

--
-- Name: recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;


--
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- Name: recipes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);


--
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ratings (id, recipe_id, user_id, rating) FROM stdin;
30	4	deepak	5
31	4	Deepa	3
32	4	deepak	4
33	4	CURD	5
34	4	deepak	5
35	6	depak	5
36	2	depak	3
37	3	deepak	2
38	1	deepak	1
39	6	deepak	3
40	4	deepak	4
41	4	deepak	5
42	4	deepak	5
43	4	deepak	5
44	4	Deepakkumar	4
\.


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipes (id, title, ingredients, steps, image_url) FROM stdin;
4	Toast with cream and strawberries	1 tbsp olive oil\n 4 rashers smoked streaky bacon\n 2 medium onions\n 2 carrots\n 2 celery sticks, finely chopped\n 2 garlic cloves, finely chopped\n 2-3 sprigs rosemary	1. Cook spaghetti according to package instructions. \n2. In a separate pan, cook pancetta until crispy. \n3. Whisk eggs and grated cheese in a bowl. \n4. Drain cooked spaghetti and mix with egg and cheese mixture. \n5. Add pancetta, salt, and black pepper. \n6. Serve hot	https://themes.muffingroup.com/be/recipes2/wp-content/uploads/2018/07/home_recipes2_blog6-960x720.jpg
3	Oriental soup	 1 tbsp olive oil\n 4 rashers smoked streaky bacon\n 2 medium onions\n 2 carrots\n 2 celery sticks, finely chopped\n 2 garlic cloves, finely chopped\n 2-3 sprigs rosemary	1.Preheat oven to 350°F (175°C). \n2.Cream together butter and sugar until smooth. \n3.Beat in eggs one at a time, then stir in vanilla. \n4.In a separate bowl, combine flour, baking powder, and salt. \n5.Gradually add dry ingredients to the wet ingredients. \n6.Stir in chocolate chips. \n7.Drop rounded tablespoons onto ungreased baking sheets. \n8.Bake 10-12 minutes until edges are golden. \n9.Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack.	https://themes.muffingroup.com/be/recipes2/wp-content/uploads/2018/07/home_recipes2_blog7-960x720.jpg
6	Thailand rice food	1 tbsp olive oil\n 4 rashers smoked streaky bacon\n 2 medium onions\n 2 carrots\n 2 celery sticks, finely chopped\n 2 garlic cloves, finely chopped\n 2-3 sprigs rosemary\n 500g beef mince	1. Cook fettuccine according to package instructions. \n2. Season chicken with salt and black pepper, then cook until no longer pink. \n3. In a saucepan, combine heavy cream and minced garlic, simmer. \n4. Stir in grated Parmesan cheese until the sauce thickens. \n5. Slice chicken and serve over cooked fettuccine with Alfredo sauce.	https://themes.muffingroup.com/be/recipes2/wp-content/uploads/2018/07/home_recipes2_blog4-960x720.jpg
1	Spaghetti with tomato sauce	 1 tbsp olive oil\n 4 rashers smoked streaky bacon\n 2 medium onions\n 2 carrots\n 2 celery sticks, finely chopped\n 2 garlic cloves, finely chopped\n 2-3 sprigs rosemary	1.Preheat oven to 350°F (175°C). \n2.Cream together butter and sugar until smooth. \n3.Beat in eggs one at a time, then stir in vanilla. \n4.In a separate bowl, combine flour, baking powder, and salt. \n5.Gradually add dry ingredients to the wet ingredients. \n6.Stir in chocolate chips. \n7.Drop rounded tablespoons onto ungreased baking sheets. \n8.Bake 10-12 minutes until edges are golden. \n9.Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack.	https://themes.muffingroup.com/be/recipes2/wp-content/uploads/2018/07/home_recipes2_blog9-960x720.jpg
5	Mixed chef’s salad	1 tbsp olive oil\n 4 rashers smoked streaky bacon\n 2 medium onions\n 2 carrots\n 2 celery sticks, finely chopped\n 2 garlic cloves, finely chopped\n 2-3 sprigs rosemary\n 500g beef mince	1.Preheat oven to 350°F (175°C). \n2.Cream together butter and sugar until smooth. \n3.Beat in eggs one at a time, then stir in vanilla. \n4.In a separate bowl, combine flour, baking powder, and salt. \n5.Gradually add dry ingredients to the wet ingredients. \n6.Stir in chocolate chips. \n7.Drop rounded tablespoons onto ungreased baking sheets. \n8.Bake 10-12 minutes until edges are golden. \n9.Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack.	https://themes.muffingroup.com/be/recipes2/wp-content/uploads/2018/07/home_recipes2_blog5-960x720.jpg
2	Seafood soup	 1 tbsp olive oil\n 4 rashers smoked streaky bacon\n 2 medium onions\n 2 carrots\n 2 celery sticks, finely chopped\n 2 garlic cloves, finely chopped\n 2-3 sprigs rosemary	1.Preheat oven to 350°F (175°C). \n2.Cream together butter and sugar until smooth. \n3.Beat in eggs one at a time, then stir in vanilla. \n4.In a separate bowl, combine flour, baking powder, and salt. \n5.Gradually add dry ingredients to the wet ingredients. \n6.Stir in chocolate chips. \n7.Drop rounded tablespoons onto ungreased baking sheets. \n8.Bake 10-12 minutes until edges are golden. \n9.Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack.	https://themes.muffingroup.com/be/recipes2/wp-content/uploads/2018/07/home_recipes2_blog8-960x720.jpg
\.


--
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ratings_id_seq', 44, true);


--
-- Name: recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.recipes_id_seq', 8, true);


--
-- Name: ratings ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

