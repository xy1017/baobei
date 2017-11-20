
USE baobei;
CREATE TABLE classify(
    id	  INT PRIMARY KEY AUTO_INCREMENT,
    cname VARCHAR(100),
    cid   INT
);
SET NAMES GBK;
INSERT INTO classify VALUES(null,"潮流女装",10);
INSERT INTO classify VALUES(null,"精品男装",20);
INSERT INTO classify VALUES(null,"鞋子箱包",30);
INSERT INTO classify VALUES(null,"时尚配饰",40);
INSERT INTO classify VALUES(null,"美食特产",50);
INSERT INTO classify VALUES(null,"数码家电",60);
INSERT INTO classify VALUES(null,"家用日具",70);
INSERT INTO classify VALUES(null,"美容护肤",80);
INSERT INTO classify VALUES(null,"母婴用品",90);
INSERT INTO classify VALUES(null,"综合使用",100);


