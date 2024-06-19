DROP DATABASE IF EXISTS `kerbb`;
CREATE DATABASE IF NOT EXISTS `kerbb` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `kerbb`;

--
-- Create the Products table
CREATE TABLE `Products` (
  `Product_ID` varchar(6) PRIMARY KEY,
  `Name` VARCHAR(255) NOT NULL,
  `Categories` VARCHAR(255),
  `Price` DECIMAL(10,2) NOT NULL,  -- Consider using decimal for prices
  `Status` VARCHAR(255),
  `Description` VARCHAR(1000),
  `Image_Path` VARCHAR(255) NOT NULL
);
                                                                                                                        										

CREATE TABLE `User` (
  `Account_ID` varchar(6) PRIMARY KEY,
  `First_Name` VARCHAR(255) NOT NULL,
  `Last_Name` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL UNIQUE ,
  `Image_Path` VARCHAR(255) NOT NULL
);

-- Create the Login_Information table (assuming separate table for login)
CREATE TABLE `Login_Information` (
  `Username` VARCHAR(255) NOT NULL UNIQUE,  -- Make username unique for login
  `Password` VARCHAR(255) NOT NULL,
 `Account_ID` varchar(6) PRIMARY KEY,  -- Explicitly define Account_ID as primary key
  FOREIGN KEY (Account_ID) REFERENCES User(Account_ID)  -- Correct FOREIGN KEY syntax
);

CREATE TABLE `edit`
(
`Product_ID` varchar(6) NOT NULL,
`Account_ID` varchar(6) NOT NULL,
FOREIGN KEY (`Product_ID`) REFERENCES `Products`(`Product_ID`),
FOREIGN KEY (`Account_ID`) REFERENCES `User`(`Account_ID`)
);

CREATE TABLE `address`
(
`Account_ID` varchar(6)  NOT NULL,
`address` varchar(255)  NOT NULL,
FOREIGN KEY (`Account_ID`) REFERENCES `User`(`Account_ID`)
);

CREATE TABLE `color`
(
`Product_ID` varchar(6)  NOT NULL,
`COLOR` varchar(10)  NOT NULL,
FOREIGN KEY (`Product_ID`) REFERENCES `products`(`Product_ID`)
);


CREATE TABLE `size`
(
`Product_ID` varchar(6)  NOT NULL,
`size` varchar(5)  NOT NULL,
FOREIGN KEY (`Product_ID`) REFERENCES `products`(`Product_ID`)
);


INSERT INTO `Products`(`Product_ID`,`Name`,`Categories`,`Price`,`Status`,`Description`,`Image_Path`) VALUES
('pro001','kerbb Air Frozen','Males','3500','avilable','kerbb   Air Frozen shoes are not only warm and durable, but they also have a modern and stylish design.The shoes are available in a variety of colors and styles to suit any occasion but warmth is not the only story. kerbb Air Frozen boasts a sleek and stylish design that complements any outfit Available in a variety of colors and styles (mention some examples here, like high-top, low-top, bold colors, or neutral tones), you can find a pair that perfectly matches your personal style, whether you are hitting the slopes or strolling through the city.','https://lh3.googleusercontent.com/d/10IWOaTEjq8LrEi-4Lo9rWQa1Z8Acyduz'),
('pro002','kerbb OG','Males','2110','avilable','The Kerbb OG shoes embody a fusion of classic design elements and contemporary style, making them a versatile choice for any occasion. Crafted with meticulous attention to detail, these shoes feature a sleek silhouette with clean lines and a low-profile design. The upper is constructed from premium materials, ensuring durability and comfort with every step.','https://lh3.googleusercontent.com/d/1QnvacxD8wQJHgJBC-dj2cyd-7LOk3tQh'),
('pro003','kerbb Chicago','Males','4500','avilable','kerbb Chicago shoes Kerb Chicago shoes are a stylish and urban footwear option designed for those who appreciate both fashion and function. These shoes feature a sleek and modern design, perfect for those who want to make a statement with their footwear. The Chicago model offers a comfortable fit, making them ideal for everyday wear. Whether you are strolling through the city streets or heading out for a night on the town, Kerb Chicago shoes are sure to complement your style.','https://lh3.googleusercontent.com/d/12epmYAmWScPjuk6OpoBjPaR7OKK8tYxR'),
('pro004','kerbb Silver Bullet','Males','3800','avilable','The Kerbb Silver Bullet shoes are a striking blend of futuristic design and urban flair. These shoes feature a sleek, metallic silver upper that catches the light and demands attention. The streamlined silhouette and sharp angles create a dynamic look that exudes confidence and style. ','https://lh3.googleusercontent.com/d/1vP68dOCjLU3W_WdeTbn-pfyzOYEPTKEv'),                                                            
('pro005','kerbb White fluffy','Females','2400','avilable','The Kerbb White Fluffy Heels are a playful and glamorous take on the classic high heel. These heels feature a luxurious fluffy white trim that adds a touch of fun and texture to your look. The sleek silhouette and stiletto heel provide a flattering lift, while the fluffy trim adds a soft and feminine touch. Whether you are dressing up for a night out or adding a statement piece to your everyday wardrobe ','https://lh3.googleusercontent.com/d/1qXKnk0MjFHTT_3vIVyYfvfXYqt9SD4TH'),                                                            
('pro006','kerbb Golden Apple','Females','2600','avilable','The Kerbb Golden Apple Heels are a stunning blend of elegance and allure. These heels feature a striking metallic gold finish that adds a touch of glamour to any outfit. The sleek silhouette and pointed toe design create a sophisticated look that is perfect for both formal events and nights out on the town. The standout feature of these heels is the embellishment of a golden apple on the front, adding a whimsical and playful element to the overall design. ','https://lh3.googleusercontent.com/d/15miCjphWB2ud4pWA6_r4_l33kSyvyulY'),
('pro007','kerbb Miraculous','Females','3000','avilable','The Kerbb Miraculous Heels are a true showstopper, combining avant-garde design with a touch of whimsy. These heels feature a sculptural silhouette that is both daring and elegant, with a unique heel shape that adds a dynamic element to your look. The upper is crafted from high-quality materials, ensuring a comfortable fit that molds to your foot over time. The standout feature of these heels is the intricate detailing, which includes delicate embellishments  ','https://lh3.googleusercontent.com/d/1E3k4HmO2j_TgaSNJEfFeLJn5zfA0Fdz6'),                                                            
('pro008','kerbb Royal purple','Females','2290','avilable','The Kerbb Royal Purple Heels are a regal and luxurious addition to any shoe collection. These heels feature a rich, deep purple hue that exudes sophistication and elegance. The sleek silhouette and pointed toe design elongate the leg and create a flattering look. The upper is crafted from high-quality materials, ensuring durability and comfort with every step. Whether you are dressing up for a special occasion or adding a pop of color to your everyday wardrobe ','https://lh3.googleusercontent.com/d/1mVf7lohplHZ4wKM4MjaMHC3JQYNO7vVE'),                                                            
('pro009','kerbb so charm','kids','3500','avilable','The Kerbb So Charm shoes for kids are a delightful blend of style and comfort, perfect for your little fashionista. These shoes feature a charming design with vibrant colors and playful details that are sure to capture your child imagination. The upper is crafted from durable materials, ensuring long-lasting wear ','https://lh3.googleusercontent.com/d/14hxKUYgogsrrIz4QX7eAgpVpKJIgVpcW'),                                                            
('pro010','kerbb Superstar White','kids','3200','avilable','The Kerbb Superstar White shoes for kids are a classic and stylish choice for young trendsetters. These shoes feature a timeless design with a white upper and iconic star detailing, reminiscent of vintage athletic shoes. The durable construction and cushioned insole ensure all-day comfort and support, perfect for active kids. ','https://lh3.googleusercontent.com/d/139TJtI9bFGCrXjTDT82aYgRZK0b4LgFq'),                                                            
('pro011','kerbb Suede Classic','kids','2800','avilable','The Kerbb Suede Classic shoes for kids are a stylish and comfortable choice for young fashionistas. These shoes feature a classic design with a suede upper that adds a touch of sophistication to any outfit. The low-top silhouette and lace-up closure provide a secure fit, while the cushioned insole ensures all-day comfort ','https://lh3.googleusercontent.com/d/1e4M4eMFdeZpxhDHYal4fh8feilC2l1B2'),                                                            
('pro012','kerbb Classic Leather White','kids','3000','avilable','The Kerbb Classic Leather White shoes for kids are a timeless and versatile choice for any young trendsetter. These shoes feature a clean and classic design with a white leather upper that adds a touch of sophistication to any outfit. The low-top silhouette and lace-up closure provide a secure and comfortable fit, while the cushioned insole ensures all-day comfort. ','https://lh3.googleusercontent.com/d/19ZMKLKk0R_yg8SqkYIR9LtDThY3k6Myw');
                             
INSERT INTO `User` (`Account_ID`, `First_Name`, `Last_Name`, `Email`,`Image_Path`) VALUES
('kb001', 'Yotsapat', 'Rattanaprasert', 'joeong.doe@example.com','https://lh3.googleusercontent.com/d/1LPTrw5eBXXpiF4mamNExTZxKOKwvLbuA'),
('kb002', 'Nathapat', 'Pintip', 'Mon.smith@example.com','https://lh3.googleusercontent.com/d/1-J-7lTQeuYy5yMwkfTuercKcVLJNQF8o'),
('kb003', 'Chalisa', 'Kengkaewpelada', 'Nin.johnson@example.com','https://lh3.googleusercontent.com/d/1fbJnhC8dajogxdvHR8bsy7aq93bH6M37'),
('kb004', 'Boonchai', 'Pintharotpanya', 'Nemone.brown@example.com','https://lh3.googleusercontent.com/d/1j9AZbt5zWD_emcW5Jmn80CkDeGpqaQDL'),
('kb005', 'Napat', 'Jiratanaon', 'Napat.davis@example.com','https://lh3.googleusercontent.com/d/1UMoaq0ZQCLUfk3zuDNcbuYgH4yg1awYk'),
('kb006', 'Eve', 'Wilson', 'eve.wilson@example.com','https://lh3.googleusercontent.com/d/1OT6mPR-Be6FwpUG6JBfV-IA8h2GinTSG'),
('kb007', 'Grace', 'Martinez', 'grace.martinez@example.com','https://lh3.googleusercontent.com/d/1ZebSzVesv1u5oKe9HbxBIWF0cGVH6vJb'),
('kb008', 'Henry', 'Garcia', 'henry.garcia@example.com','https://lh3.googleusercontent.com/d/1OT6mPR-Be6FwpUG6JBfV-IA8h2GinTSG'),
('kb009', 'Isabel', 'Lopez', 'isabel.lopez@example.com','https://lh3.googleusercontent.com/d/1ZebSzVesv1u5oKe9HbxBIWF0cGVH6vJb'),
('kb010', 'Kevin', 'Perez', 'kevin.perez@example.com','https://lh3.googleusercontent.com/d/1OT6mPR-Be6FwpUG6JBfV-IA8h2GinTSG');


INSERT INTO `Login_Information` (`Username`, `Password`, `Account_ID`) VALUES
('Joeongja6', 'Joeoa616', 'kb001'),
('Monsmith98', '0458966', 'kb002'),
('johnyn9', '612547p', 'kb003'),
('Nemonelij', 'lovelju', 'kb004'),
('Napassl', 'lovelove9', 'kb005'),
('Eve.nkl', 'evejao', 'kb006'),
('Gradcer', 'domenon', 'kb007'),
('Henrygf', 'dfhenfr', 'kb008'),
('Isabellyu', 'chafree', 'kb009'),
('kevinclein', 'pakij10', 'kb010');

INSERT INTO `edit` (`Product_ID`, `Account_ID`) VALUES
('pro001', 'kb001'),
('pro001', 'kb002'),
('pro001', 'kb003'),
('pro001', 'kb004'),
('pro005', 'kb005'),
('pro006', 'kb006'),
('pro007', 'kb007'),
('pro008', 'kb008'),
('pro009', 'kb009'),
('pro010', 'kb010');

-- Insert addresses
INSERT INTO `address` (`Account_ID`, `address`) VALUES
('kb001', '123 Main St, Anytown, USA'),
('kb002', '456 Elm St, Otherville, USA'),
('kb003', '789 Oak St, Somewhere, USA'),
('kb004', '321 Pine St, Nowhere, USA'),
('kb005', '654 Maple St, Anywhere, USA'),
('kb006', '987 Cedar St, Elsewhere, USA'),
('kb007', '654 Birch St, Nowheresville, USA'),
('kb008', '321 Spruce St, Lostville, USA'),
('kb009', '789 Willow St, Foundland, USA'),
('kb010', '123 Cherry St, Hiddenplace, USA');

-- Insert color data
INSERT INTO `color` (`Product_ID`, `COLOR`) VALUES
('pro001', 'white'),('pro001', 'black'),('pro001', 'violet'),
('pro002', 'white'),('pro002', 'black'),('pro002', 'violet'),
('pro003', 'white'),('pro003', 'black'),('pro003', 'violet'),
('pro004', 'white'),('pro004', 'black'),('pro004', 'violet'),
('pro005', 'white'),('pro005', 'black'),('pro005', 'violet'),
('pro006', 'white'),('pro006', 'black'),('pro006', 'violet'),
('pro007', 'white'),('pro007', 'black'),('pro007', 'violet'),
('pro008', 'white'),('pro008', 'black'),('pro008', 'violet'),
('pro009', 'white'),('pro009', 'black'),('pro009', 'violet'),
('pro010', 'white'),('pro010', 'black'),('pro010', 'violet'),
('pro011', 'white'),('pro011', 'black'),('pro011', 'violet'),
('pro012', 'white'),('pro012', 'black'),('pro012', 'violet');

INSERT INTO `size` (`Product_ID`, `size`) VALUES
('pro001', '39'),('pro001', '40'),('pro001', '41'),
('pro002', '39'),('pro002', '40'),('pro002', '41'),
('pro003', '39'),('pro003', '40'),('pro003', '41'),
('pro004', '39'),('pro004', '40'),('pro004', '41'),
('pro005', '39'),('pro005', '40'),('pro005', '41'),
('pro006', '39'),('pro006', '40'),('pro006', '41'),
('pro008', '39'),('pro008', '40'),('pro008', '41'),
('pro009', '39'),('pro009', '40'),('pro009', '41'),
('pro010', '39'),('pro010', '40'),('pro010', '41'),
('pro011', '39'),('pro011', '40'),('pro011', '41'),
('pro012', '39'),('pro012', '40'),('pro012', '41');



