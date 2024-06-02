CREATE TABLE `contacts` (
  `id` int NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefono` varchar(11) NOT NULL,
  `mensaje` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Indices de la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);


- AUTO_INCREMENT de la tabla `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;


CREATE TABLE post(
    id              int(11) auto_increment not null, 
    nombre          varchar(150) not null, 
    email           varchar(200) not null,
    mensaje         varchar(250) not null,
    CONSTRAINT pk_contacts PRIMARY KEY(id)
);

