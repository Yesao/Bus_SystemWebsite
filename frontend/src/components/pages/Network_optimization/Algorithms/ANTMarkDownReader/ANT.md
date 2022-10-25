# 蚁群算法

![image-20210426163405895](https://i.loli.net/2021/04/26/Gd9UPyBQ2WOwuMs.png)

蚁群算法是一种用来寻找优化路径的概率型算法。它由Marco Dorigo于1992年在他的博士论文中提出，其灵感来源于蚂蚁在寻找食物过程中发现路径的行为。这种算法具有分布计算、信息正反馈和启发式搜索的特征，本质上是进化算法中的一种启发式全局优化算法。蚂蚁找到最短路径要归功于信息素和环境，假设有两条路可从蚁窝通向食物，开始时两条路上的蚂蚁数量差不多：当蚂蚁到达终点之后会立即返回，距离短的路上的蚂蚁往返一次时间短，重复频率快，在单位时间里往返蚂蚁的数目就多，留下的信息素也多，会吸引更多蚂蚁过来，会留下更多信息素。而距离长的路正相反，因此越来越多的蚂蚁聚集到最短路径上来。

 

**算法流程**

 

感知范围，蚂蚁观察到的范围是一个方格世界，相关参数为速度半径，一般为3，可观察和移动的范围为3x3方格。

环境信息，蚂蚁所在环境中有障碍物、其他蚂蚁、信息素，其中信息素包括食物信息素(找到食物的蚂蚁留下的)、窝信息素(找到窝的蚂蚁留下的)，信息素以一定速率消失。

觅食规则，蚂蚁在感知范围内寻找食物，如果感知到就会过去；否则朝信息素多的地方走，每只蚂蚁会以小概率犯错误，并非都往信息素最多的方向移动。蚂蚁找窝的规则类似，仅对窝信息素有反应。

移动规则，蚂蚁朝信息素最多的方向移动，当周围没有信息素指引时，会按照原来运动方向惯性移动。而且会记住最近走过的点，防止原地转圈。

避障规则，当蚂蚁待移动方向有障碍物时，将随机选择其他方向；当有信息素指引时，将按照觅食规则移动。

散发信息素规则，在刚找到食物或者窝时，蚂蚁散发的信息素最多；当随着走远时，散发的信息素将逐渐减少。

 

**参考文献**

[1].  吴斌,史忠植.一种基于蚁群算法的TSP问题分段求解算法[J].计算机学报,2001(12):1328-1333.

[2].  张纪会,高齐圣,徐心和.自适应蚁群算法[J].控制理论与应用,2000(01):1-3+8-60.

[3].  Yang J, Shi X, Marchese M, et al. An ant colony optimization method for generalized TSP problem[J]. Progress in Natural Science, 2008, 18(11): 1417-1422.

[4].   García-Martínez C, Cordón O, Herrera F. A taxonomy and an empirical analysis of multiple objective ant colony optimization algorithms for the bi-criteria TSP[J]. European journal of operational research, 2007, 180(1): 116-148.