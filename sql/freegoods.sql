
USE baobei;
CREATE TABLE freegoods(
    id	  INT PRIMARY KEY AUTO_INCREMENT,
    fpic  VARCHAR(200),
    fname VARCHAR(200),
    copies INT,
    fouces INT,
    vip  VARCHAR(100),
    post  VARCHAR(50),
    cid   INT,
    price DOUBLE(10,2),
    fid   INT

);
SET NAMES GBK;
INSERT INTO freegoods VALUES(null,"images/20170719134348_20817_rez-220-220.jpg","【免费】送瘦脸V脸小脸精华液1瓶 去眼袋提拉紧致",30,46,"images/zsVip.gif","免邮",80,88.00,1);
INSERT INTO freegoods VALUES(null,"images/20170719161134_25592_rez-220-220.jpg","【免费】iPhone6s 苹果7Plus迪士尼手机壳",5,118,"images/zsVip.gif","免邮",40,9.90,2);
INSERT INTO freegoods VALUES(null,"images/161933_79235_rez-220-220.jpg","【免费】赠送全新料食品背心袋一捆 50个",30,62,"images/zsVip.gif","免邮",70,8.80,3);
INSERT INTO freegoods VALUES(null,"images/143631_60168_rez-220-220.jpg","【免费】送 时尚卡通烟灰缸一个",10,65,"images/zzVip.gif","免邮",70,20.00,4);
INSERT INTO freegoods VALUES(null,"images/20170718140255_46101_rez-220-220.jpg","【免费】防水12星座套组3瓶装 719",5,128,"images/zzVip.gif","免邮",40,86.00,5);
INSERT INTO freegoods VALUES(null,"images/20170719170547_54715_rez-220-220.png","【免费】拍童靴送成人PVC拖鞋一双",3,95,"images/zsVip.gif","免邮",30,29.89,6);
INSERT INTO freegoods VALUES(null,"images/20170719164954_55366_rez-220-220.jpg","【免费】炭焙铁观音浓香型250大包装",7,122,"images/zsVip.gif","免邮",50,75.00,7);
INSERT INTO freegoods VALUES(null,"images/20170719160402_11617_rez-220-220.jpg","【免费】拍牛仔裤 送男士T恤一件",3,70,"images/zsVip.gif","免邮",20,119.00,8);
INSERT INTO freegoods VALUES(null,"images/144807_26152_rez-220-220.jpg","【免费】紫色指甲油梦幻紫罗兰",5,167,"images/zzVip.gif","免邮",40,35.00,9);
INSERT INTO freegoods VALUES(null,"images/20170719154449_29282_rez-220-220.jpg","【免费】宽松T恤收藏加购优先审核",5,178,"images/zzVip.gif","免邮",20,23.00,10);
INSERT INTO freegoods VALUES(null,"images/20170719152452_54537_rez-220-220.jpg","【免费】苹果品牌优质羽博数据线",5,137,"images/zsVip.gif","免邮",100,15.80,11);
INSERT INTO freegoods VALUES(null,"images/153942_45059_rez-220-220.png","【免费】品牌羽博苹果线认证线",5,133,"images/zzVip.gif","免邮",100,15.80,12);
INSERT INTO freegoods VALUES(null,"images/20170719140732_68525_rez-220-220.jpg","【免费】拍连衣裙送 睡裙一件",3,153,"images/zzVip.gif","免邮",10,79.00,13);
INSERT INTO freegoods VALUES(null,"images/20170719115836_30514_rez-220-220.jpg","【免费】拍迎宾灯送 实用工具箱一个",12,63,"images/zzVip.gif","免邮",100,68.00,14);
INSERT INTO freegoods VALUES(null,"images/20170719120220_89970_rez-220-220.jpg","【免费】拍迎宾灯送 专用工具箱一个",12,59,"images/zzVip.gif","免邮",100,68.00,15);
INSERT INTO freegoods VALUES(null,"images/20170703102837_18792_rez-220-220.jpg","【免费】拍运动套装送时尚棒球帽1顶",10,563,"images/zsVip.gif","免邮",40,108.00,16);
INSERT INTO freegoods VALUES(null,"images/20170719134348_20817_rez-220-220.jpg","【免费】送瘦脸V脸小脸精华液1瓶 去眼袋提拉紧致",30,46,"images/zsVip.gif","免邮",80,88.00,17);
INSERT INTO freegoods VALUES(null,"images/20170719161134_25592_rez-220-220.jpg","【免费】iPhone6s 苹果7Plus迪士尼手机壳",5,118,"images/zsVip.gif","免邮",40,9.90,18);
INSERT INTO freegoods VALUES(null,"images/161933_79235_rez-220-220.jpg","【免费】赠送全新料食品背心袋一捆 50个",30,62,"images/zsVip.gif","免邮",70,8.80,19);
INSERT INTO freegoods VALUES(null,"images/143631_60168_rez-220-220.jpg","【免费】送 时尚卡通烟灰缸一个",10,65,"images/zzVip.gif","免邮",70,20.00,20);
INSERT INTO freegoods VALUES(null,"images/20170718140255_46101_rez-220-220.jpg","【免费】防水12星座套组3瓶装 719",5,128,"images/zzVip.gif","免邮",40,86.00,21);
INSERT INTO freegoods VALUES(null,"images/20170719170547_54715_rez-220-220.png","【免费】拍童靴送成人PVC拖鞋一双",3,95,"images/zsVip.gif","免邮",30,29.89,22);
INSERT INTO freegoods VALUES(null,"images/20170719164954_55366_rez-220-220.jpg","【免费】炭焙铁观音浓香型250大包装",7,122,"images/zsVip.gif","免邮",50,75.00,23);
INSERT INTO freegoods VALUES(null,"images/20170719160402_11617_rez-220-220.jpg","【免费】拍牛仔裤 送男士T恤一件",3,70,"images/zsVip.gif","免邮",20,119.00,24);
INSERT INTO freegoods VALUES(null,"images/144807_26152_rez-220-220.jpg","【免费】紫色指甲油梦幻紫罗兰",5,167,"images/zzVip.gif","免邮",40,35.00,25);
INSERT INTO freegoods VALUES(null,"images/20170719154449_29282_rez-220-220.jpg","【免费】宽松T恤收藏加购优先审核",5,178,"images/zzVip.gif","免邮",20,23.00,26);
INSERT INTO freegoods VALUES(null,"images/20170719152452_54537_rez-220-220.jpg","【免费】苹果品牌优质羽博数据线",5,137,"images/zsVip.gif","免邮",100,15.80,27);
INSERT INTO freegoods VALUES(null,"images/153942_45059_rez-220-220.png","【免费】品牌羽博苹果线认证线",5,133,"images/zzVip.gif","免邮",100,79.00,28);
INSERT INTO freegoods VALUES(null,"images/20170719140732_68525_rez-220-220.jpg","【免费】拍连衣裙送 睡裙一件",3,153,"images/zzVip.gif","免邮",10,68.00,29);
INSERT INTO freegoods VALUES(null,"images/20170719115836_30514_rez-220-220.jpg","【免费】拍迎宾灯送 实用工具箱一个",12,63,"images/zzVip.gif","免邮",100,68.00,30);
INSERT INTO freegoods VALUES(null,"images/20170719120220_89970_rez-220-220.jpg","【免费】拍迎宾灯送 专用工具箱一个",12,59,"images/zzVip.gif","免邮",100,68.00,31);
INSERT INTO freegoods VALUES(null,"images/20170703102837_18792_rez-220-220.jpg","【免费】拍运动套装送时尚棒球帽1顶",10,563,"images/zsVip.gif","免邮",40,108.00,32);
INSERT INTO freegoods VALUES(null,"images/20170718140255_46101_rez-220-220.jpg","【免费】防水12星座套组3瓶装 719",5,128,"images/zzVip.gif","免邮",40,86.00,33);
INSERT INTO freegoods VALUES(null,"images/20170719170547_54715_rez-220-220.png","【免费】拍童靴送成人PVC拖鞋一双",3,95,"images/zsVip.gif","免邮",30,29.89,34);
INSERT INTO freegoods VALUES(null,"images/20170719164954_55366_rez-220-220.jpg","【免费】炭焙铁观音浓香型250大包装",7,122,"images/zsVip.gif","免邮",50,75.00,35);
INSERT INTO freegoods VALUES(null,"images/20170719160402_11617_rez-220-220.jpg","【免费】拍牛仔裤 送男士T恤一件",3,70,"images/zsVip.gif","免邮",20,119.00,36);
INSERT INTO freegoods VALUES(null,"images/144807_26152_rez-220-220.jpg","【免费】紫色指甲油梦幻紫罗兰",5,167,"images/zzVip.gif","免邮",40,35.00,37);
INSERT INTO freegoods VALUES(null,"images/20170719154449_29282_rez-220-220.jpg","【免费】宽松T恤收藏加购优先审核",5,178,"images/zzVip.gif","免邮",20,23.00,38);
INSERT INTO freegoods VALUES(null,"images/20170719152452_54537_rez-220-220.jpg","【免费】苹果品牌优质羽博数据线",5,137,"images/zsVip.gif","免邮",100,15.80,39);
INSERT INTO freegoods VALUES(null,"images/153942_45059_rez-220-220.png","【免费】品牌羽博苹果线认证线",5,133,"images/zzVip.gif","免邮",100,15.80,40);
INSERT INTO freegoods VALUES(null,"images/20170719140732_68525_rez-220-220.jpg","【免费】拍连衣裙送 睡裙一件",3,153,"images/zzVip.gif","免邮",10,79.00,41);
INSERT INTO freegoods VALUES(null,"images/20170719115836_30514_rez-220-220.jpg","【免费】拍迎宾灯送 实用工具箱一个",12,63,"images/zzVip.gif","免邮",100,68.00,42);
INSERT INTO freegoods VALUES(null,"images/20170719120220_89970_rez-220-220.jpg","【免费】拍迎宾灯送 专用工具箱一个",12,59,"images/zzVip.gif","免邮",100,68.00,43);
INSERT INTO freegoods VALUES(null,"images/20170703102837_18792_rez-220-220.jpg","【免费】拍运动套装送时尚棒球帽1顶",10,563,"images/zsVip.gif","免邮",40,108.00,44);



