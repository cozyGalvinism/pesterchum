(self.webpackChunkpesterchum=self.webpackChunkpesterchum||[]).push([[842],{4842:e=>{e.exports&&(e.exports=function(){var e=3,r=4,n=12,t=13,i=16,u=17;function f(e,r){void 0===r&&(r=0);var n=e.charCodeAt(r);if(55296<=n&&n<=56319&&r<e.length-1){var t=n;return 56320<=(i=e.charCodeAt(r+1))&&i<=57343?1024*(t-55296)+(i-56320)+65536:t}if(56320<=n&&n<=57343&&r>=1){var i=n;return 55296<=(t=e.charCodeAt(r-1))&&t<=56319?1024*(t-55296)+(i-56320)+65536:i}return n}function h(f,h,o){var a=[f].concat(h).concat([o]),c=a[a.length-2],l=o,s=a.lastIndexOf(14);if(s>1&&a.slice(1,s).every((function(r){return r==e}))&&-1==[e,t,u].indexOf(f))return 2;var d=a.lastIndexOf(r);if(d>0&&a.slice(1,d).every((function(e){return e==r}))&&-1==[n,r].indexOf(c))return a.filter((function(e){return e==r})).length%2==1?3:4;if(0==c&&1==l)return 0;if(2==c||0==c||1==c)return 14==l&&h.every((function(r){return r==e}))?2:1;if(2==l||0==l||1==l)return 1;if(6==c&&(6==l||7==l||9==l||10==l))return 0;if(!(9!=c&&7!=c||7!=l&&8!=l))return 0;if((10==c||8==c)&&8==l)return 0;if(l==e||15==l)return 0;if(5==l)return 0;if(c==n)return 0;var v=-1!=a.indexOf(e)?a.lastIndexOf(e)-1:a.length-2;return-1!=[t,u].indexOf(a[v])&&a.slice(v+1,-1).every((function(r){return r==e}))&&14==l||15==c&&-1!=[i,u].indexOf(l)?0:-1!=h.indexOf(r)?2:c==r&&l==r?0:1}function o(f){return 1536<=f&&f<=1541||1757==f||1807==f||2274==f||3406==f||69821==f||70082<=f&&f<=70083||72250==f||72326<=f&&f<=72329||73030==f?n:13==f?0:10==f?1:0<=f&&f<=9||11<=f&&f<=12||14<=f&&f<=31||127<=f&&f<=159||173==f||1564==f||6158==f||8203==f||8206<=f&&f<=8207||8232==f||8233==f||8234<=f&&f<=8238||8288<=f&&f<=8292||8293==f||8294<=f&&f<=8303||55296<=f&&f<=57343||65279==f||65520<=f&&f<=65528||65529<=f&&f<=65531||113824<=f&&f<=113827||119155<=f&&f<=119162||917504==f||917505==f||917506<=f&&f<=917535||917632<=f&&f<=917759||918e3<=f&&f<=921599?2:768<=f&&f<=879||1155<=f&&f<=1159||1160<=f&&f<=1161||1425<=f&&f<=1469||1471==f||1473<=f&&f<=1474||1476<=f&&f<=1477||1479==f||1552<=f&&f<=1562||1611<=f&&f<=1631||1648==f||1750<=f&&f<=1756||1759<=f&&f<=1764||1767<=f&&f<=1768||1770<=f&&f<=1773||1809==f||1840<=f&&f<=1866||1958<=f&&f<=1968||2027<=f&&f<=2035||2070<=f&&f<=2073||2075<=f&&f<=2083||2085<=f&&f<=2087||2089<=f&&f<=2093||2137<=f&&f<=2139||2260<=f&&f<=2273||2275<=f&&f<=2306||2362==f||2364==f||2369<=f&&f<=2376||2381==f||2385<=f&&f<=2391||2402<=f&&f<=2403||2433==f||2492==f||2494==f||2497<=f&&f<=2500||2509==f||2519==f||2530<=f&&f<=2531||2561<=f&&f<=2562||2620==f||2625<=f&&f<=2626||2631<=f&&f<=2632||2635<=f&&f<=2637||2641==f||2672<=f&&f<=2673||2677==f||2689<=f&&f<=2690||2748==f||2753<=f&&f<=2757||2759<=f&&f<=2760||2765==f||2786<=f&&f<=2787||2810<=f&&f<=2815||2817==f||2876==f||2878==f||2879==f||2881<=f&&f<=2884||2893==f||2902==f||2903==f||2914<=f&&f<=2915||2946==f||3006==f||3008==f||3021==f||3031==f||3072==f||3134<=f&&f<=3136||3142<=f&&f<=3144||3146<=f&&f<=3149||3157<=f&&f<=3158||3170<=f&&f<=3171||3201==f||3260==f||3263==f||3266==f||3270==f||3276<=f&&f<=3277||3285<=f&&f<=3286||3298<=f&&f<=3299||3328<=f&&f<=3329||3387<=f&&f<=3388||3390==f||3393<=f&&f<=3396||3405==f||3415==f||3426<=f&&f<=3427||3530==f||3535==f||3538<=f&&f<=3540||3542==f||3551==f||3633==f||3636<=f&&f<=3642||3655<=f&&f<=3662||3761==f||3764<=f&&f<=3769||3771<=f&&f<=3772||3784<=f&&f<=3789||3864<=f&&f<=3865||3893==f||3895==f||3897==f||3953<=f&&f<=3966||3968<=f&&f<=3972||3974<=f&&f<=3975||3981<=f&&f<=3991||3993<=f&&f<=4028||4038==f||4141<=f&&f<=4144||4146<=f&&f<=4151||4153<=f&&f<=4154||4157<=f&&f<=4158||4184<=f&&f<=4185||4190<=f&&f<=4192||4209<=f&&f<=4212||4226==f||4229<=f&&f<=4230||4237==f||4253==f||4957<=f&&f<=4959||5906<=f&&f<=5908||5938<=f&&f<=5940||5970<=f&&f<=5971||6002<=f&&f<=6003||6068<=f&&f<=6069||6071<=f&&f<=6077||6086==f||6089<=f&&f<=6099||6109==f||6155<=f&&f<=6157||6277<=f&&f<=6278||6313==f||6432<=f&&f<=6434||6439<=f&&f<=6440||6450==f||6457<=f&&f<=6459||6679<=f&&f<=6680||6683==f||6742==f||6744<=f&&f<=6750||6752==f||6754==f||6757<=f&&f<=6764||6771<=f&&f<=6780||6783==f||6832<=f&&f<=6845||6846==f||6912<=f&&f<=6915||6964==f||6966<=f&&f<=6970||6972==f||6978==f||7019<=f&&f<=7027||7040<=f&&f<=7041||7074<=f&&f<=7077||7080<=f&&f<=7081||7083<=f&&f<=7085||7142==f||7144<=f&&f<=7145||7149==f||7151<=f&&f<=7153||7212<=f&&f<=7219||7222<=f&&f<=7223||7376<=f&&f<=7378||7380<=f&&f<=7392||7394<=f&&f<=7400||7405==f||7412==f||7416<=f&&f<=7417||7616<=f&&f<=7673||7675<=f&&f<=7679||8204==f||8400<=f&&f<=8412||8413<=f&&f<=8416||8417==f||8418<=f&&f<=8420||8421<=f&&f<=8432||11503<=f&&f<=11505||11647==f||11744<=f&&f<=11775||12330<=f&&f<=12333||12334<=f&&f<=12335||12441<=f&&f<=12442||42607==f||42608<=f&&f<=42610||42612<=f&&f<=42621||42654<=f&&f<=42655||42736<=f&&f<=42737||43010==f||43014==f||43019==f||43045<=f&&f<=43046||43204<=f&&f<=43205||43232<=f&&f<=43249||43302<=f&&f<=43309||43335<=f&&f<=43345||43392<=f&&f<=43394||43443==f||43446<=f&&f<=43449||43452==f||43493==f||43561<=f&&f<=43566||43569<=f&&f<=43570||43573<=f&&f<=43574||43587==f||43596==f||43644==f||43696==f||43698<=f&&f<=43700||43703<=f&&f<=43704||43710<=f&&f<=43711||43713==f||43756<=f&&f<=43757||43766==f||44005==f||44008==f||44013==f||64286==f||65024<=f&&f<=65039||65056<=f&&f<=65071||65438<=f&&f<=65439||66045==f||66272==f||66422<=f&&f<=66426||68097<=f&&f<=68099||68101<=f&&f<=68102||68108<=f&&f<=68111||68152<=f&&f<=68154||68159==f||68325<=f&&f<=68326||69633==f||69688<=f&&f<=69702||69759<=f&&f<=69761||69811<=f&&f<=69814||69817<=f&&f<=69818||69888<=f&&f<=69890||69927<=f&&f<=69931||69933<=f&&f<=69940||70003==f||70016<=f&&f<=70017||70070<=f&&f<=70078||70090<=f&&f<=70092||70191<=f&&f<=70193||70196==f||70198<=f&&f<=70199||70206==f||70367==f||70371<=f&&f<=70378||70400<=f&&f<=70401||70460==f||70462==f||70464==f||70487==f||70502<=f&&f<=70508||70512<=f&&f<=70516||70712<=f&&f<=70719||70722<=f&&f<=70724||70726==f||70832==f||70835<=f&&f<=70840||70842==f||70845==f||70847<=f&&f<=70848||70850<=f&&f<=70851||71087==f||71090<=f&&f<=71093||71100<=f&&f<=71101||71103<=f&&f<=71104||71132<=f&&f<=71133||71219<=f&&f<=71226||71229==f||71231<=f&&f<=71232||71339==f||71341==f||71344<=f&&f<=71349||71351==f||71453<=f&&f<=71455||71458<=f&&f<=71461||71463<=f&&f<=71467||72193<=f&&f<=72198||72201<=f&&f<=72202||72243<=f&&f<=72248||72251<=f&&f<=72254||72263==f||72273<=f&&f<=72278||72281<=f&&f<=72283||72330<=f&&f<=72342||72344<=f&&f<=72345||72752<=f&&f<=72758||72760<=f&&f<=72765||72767==f||72850<=f&&f<=72871||72874<=f&&f<=72880||72882<=f&&f<=72883||72885<=f&&f<=72886||73009<=f&&f<=73014||73018==f||73020<=f&&f<=73021||73023<=f&&f<=73029||73031==f||92912<=f&&f<=92916||92976<=f&&f<=92982||94095<=f&&f<=94098||113821<=f&&f<=113822||119141==f||119143<=f&&f<=119145||119150<=f&&f<=119154||119163<=f&&f<=119170||119173<=f&&f<=119179||119210<=f&&f<=119213||119362<=f&&f<=119364||121344<=f&&f<=121398||121403<=f&&f<=121452||121461==f||121476==f||121499<=f&&f<=121503||121505<=f&&f<=121519||122880<=f&&f<=122886||122888<=f&&f<=122904||122907<=f&&f<=122913||122915<=f&&f<=122916||122918<=f&&f<=122922||125136<=f&&f<=125142||125252<=f&&f<=125258||917536<=f&&f<=917631||917760<=f&&f<=917999?e:127462<=f&&f<=127487?r:2307==f||2363==f||2366<=f&&f<=2368||2377<=f&&f<=2380||2382<=f&&f<=2383||2434<=f&&f<=2435||2495<=f&&f<=2496||2503<=f&&f<=2504||2507<=f&&f<=2508||2563==f||2622<=f&&f<=2624||2691==f||2750<=f&&f<=2752||2761==f||2763<=f&&f<=2764||2818<=f&&f<=2819||2880==f||2887<=f&&f<=2888||2891<=f&&f<=2892||3007==f||3009<=f&&f<=3010||3014<=f&&f<=3016||3018<=f&&f<=3020||3073<=f&&f<=3075||3137<=f&&f<=3140||3202<=f&&f<=3203||3262==f||3264<=f&&f<=3265||3267<=f&&f<=3268||3271<=f&&f<=3272||3274<=f&&f<=3275||3330<=f&&f<=3331||3391<=f&&f<=3392||3398<=f&&f<=3400||3402<=f&&f<=3404||3458<=f&&f<=3459||3536<=f&&f<=3537||3544<=f&&f<=3550||3570<=f&&f<=3571||3635==f||3763==f||3902<=f&&f<=3903||3967==f||4145==f||4155<=f&&f<=4156||4182<=f&&f<=4183||4228==f||6070==f||6078<=f&&f<=6085||6087<=f&&f<=6088||6435<=f&&f<=6438||6441<=f&&f<=6443||6448<=f&&f<=6449||6451<=f&&f<=6456||6681<=f&&f<=6682||6741==f||6743==f||6765<=f&&f<=6770||6916==f||6965==f||6971==f||6973<=f&&f<=6977||6979<=f&&f<=6980||7042==f||7073==f||7078<=f&&f<=7079||7082==f||7143==f||7146<=f&&f<=7148||7150==f||7154<=f&&f<=7155||7204<=f&&f<=7211||7220<=f&&f<=7221||7393==f||7410<=f&&f<=7411||7415==f||43043<=f&&f<=43044||43047==f||43136<=f&&f<=43137||43188<=f&&f<=43203||43346<=f&&f<=43347||43395==f||43444<=f&&f<=43445||43450<=f&&f<=43451||43453<=f&&f<=43456||43567<=f&&f<=43568||43571<=f&&f<=43572||43597==f||43755==f||43758<=f&&f<=43759||43765==f||44003<=f&&f<=44004||44006<=f&&f<=44007||44009<=f&&f<=44010||44012==f||69632==f||69634==f||69762==f||69808<=f&&f<=69810||69815<=f&&f<=69816||69932==f||70018==f||70067<=f&&f<=70069||70079<=f&&f<=70080||70188<=f&&f<=70190||70194<=f&&f<=70195||70197==f||70368<=f&&f<=70370||70402<=f&&f<=70403||70463==f||70465<=f&&f<=70468||70471<=f&&f<=70472||70475<=f&&f<=70477||70498<=f&&f<=70499||70709<=f&&f<=70711||70720<=f&&f<=70721||70725==f||70833<=f&&f<=70834||70841==f||70843<=f&&f<=70844||70846==f||70849==f||71088<=f&&f<=71089||71096<=f&&f<=71099||71102==f||71216<=f&&f<=71218||71227<=f&&f<=71228||71230==f||71340==f||71342<=f&&f<=71343||71350==f||71456<=f&&f<=71457||71462==f||72199<=f&&f<=72200||72249==f||72279<=f&&f<=72280||72343==f||72751==f||72766==f||72873==f||72881==f||72884==f||94033<=f&&f<=94078||119142==f||119149==f?5:4352<=f&&f<=4447||43360<=f&&f<=43388?6:4448<=f&&f<=4519||55216<=f&&f<=55238?7:4520<=f&&f<=4607||55243<=f&&f<=55291?8:44032==f||44060==f||44088==f||44116==f||44144==f||44172==f||44200==f||44228==f||44256==f||44284==f||44312==f||44340==f||44368==f||44396==f||44424==f||44452==f||44480==f||44508==f||44536==f||44564==f||44592==f||44620==f||44648==f||44676==f||44704==f||44732==f||44760==f||44788==f||44816==f||44844==f||44872==f||44900==f||44928==f||44956==f||44984==f||45012==f||45040==f||45068==f||45096==f||45124==f||45152==f||45180==f||45208==f||45236==f||45264==f||45292==f||45320==f||45348==f||45376==f||45404==f||45432==f||45460==f||45488==f||45516==f||45544==f||45572==f||45600==f||45628==f||45656==f||45684==f||45712==f||45740==f||45768==f||45796==f||45824==f||45852==f||45880==f||45908==f||45936==f||45964==f||45992==f||46020==f||46048==f||46076==f||46104==f||46132==f||46160==f||46188==f||46216==f||46244==f||46272==f||46300==f||46328==f||46356==f||46384==f||46412==f||46440==f||46468==f||46496==f||46524==f||46552==f||46580==f||46608==f||46636==f||46664==f||46692==f||46720==f||46748==f||46776==f||46804==f||46832==f||46860==f||46888==f||46916==f||46944==f||46972==f||47e3==f||47028==f||47056==f||47084==f||47112==f||47140==f||47168==f||47196==f||47224==f||47252==f||47280==f||47308==f||47336==f||47364==f||47392==f||47420==f||47448==f||47476==f||47504==f||47532==f||47560==f||47588==f||47616==f||47644==f||47672==f||47700==f||47728==f||47756==f||47784==f||47812==f||47840==f||47868==f||47896==f||47924==f||47952==f||47980==f||48008==f||48036==f||48064==f||48092==f||48120==f||48148==f||48176==f||48204==f||48232==f||48260==f||48288==f||48316==f||48344==f||48372==f||48400==f||48428==f||48456==f||48484==f||48512==f||48540==f||48568==f||48596==f||48624==f||48652==f||48680==f||48708==f||48736==f||48764==f||48792==f||48820==f||48848==f||48876==f||48904==f||48932==f||48960==f||48988==f||49016==f||49044==f||49072==f||49100==f||49128==f||49156==f||49184==f||49212==f||49240==f||49268==f||49296==f||49324==f||49352==f||49380==f||49408==f||49436==f||49464==f||49492==f||49520==f||49548==f||49576==f||49604==f||49632==f||49660==f||49688==f||49716==f||49744==f||49772==f||49800==f||49828==f||49856==f||49884==f||49912==f||49940==f||49968==f||49996==f||50024==f||50052==f||50080==f||50108==f||50136==f||50164==f||50192==f||50220==f||50248==f||50276==f||50304==f||50332==f||50360==f||50388==f||50416==f||50444==f||50472==f||50500==f||50528==f||50556==f||50584==f||50612==f||50640==f||50668==f||50696==f||50724==f||50752==f||50780==f||50808==f||50836==f||50864==f||50892==f||50920==f||50948==f||50976==f||51004==f||51032==f||51060==f||51088==f||51116==f||51144==f||51172==f||51200==f||51228==f||51256==f||51284==f||51312==f||51340==f||51368==f||51396==f||51424==f||51452==f||51480==f||51508==f||51536==f||51564==f||51592==f||51620==f||51648==f||51676==f||51704==f||51732==f||51760==f||51788==f||51816==f||51844==f||51872==f||51900==f||51928==f||51956==f||51984==f||52012==f||52040==f||52068==f||52096==f||52124==f||52152==f||52180==f||52208==f||52236==f||52264==f||52292==f||52320==f||52348==f||52376==f||52404==f||52432==f||52460==f||52488==f||52516==f||52544==f||52572==f||52600==f||52628==f||52656==f||52684==f||52712==f||52740==f||52768==f||52796==f||52824==f||52852==f||52880==f||52908==f||52936==f||52964==f||52992==f||53020==f||53048==f||53076==f||53104==f||53132==f||53160==f||53188==f||53216==f||53244==f||53272==f||53300==f||53328==f||53356==f||53384==f||53412==f||53440==f||53468==f||53496==f||53524==f||53552==f||53580==f||53608==f||53636==f||53664==f||53692==f||53720==f||53748==f||53776==f||53804==f||53832==f||53860==f||53888==f||53916==f||53944==f||53972==f||54e3==f||54028==f||54056==f||54084==f||54112==f||54140==f||54168==f||54196==f||54224==f||54252==f||54280==f||54308==f||54336==f||54364==f||54392==f||54420==f||54448==f||54476==f||54504==f||54532==f||54560==f||54588==f||54616==f||54644==f||54672==f||54700==f||54728==f||54756==f||54784==f||54812==f||54840==f||54868==f||54896==f||54924==f||54952==f||54980==f||55008==f||55036==f||55064==f||55092==f||55120==f||55148==f||55176==f?9:44033<=f&&f<=44059||44061<=f&&f<=44087||44089<=f&&f<=44115||44117<=f&&f<=44143||44145<=f&&f<=44171||44173<=f&&f<=44199||44201<=f&&f<=44227||44229<=f&&f<=44255||44257<=f&&f<=44283||44285<=f&&f<=44311||44313<=f&&f<=44339||44341<=f&&f<=44367||44369<=f&&f<=44395||44397<=f&&f<=44423||44425<=f&&f<=44451||44453<=f&&f<=44479||44481<=f&&f<=44507||44509<=f&&f<=44535||44537<=f&&f<=44563||44565<=f&&f<=44591||44593<=f&&f<=44619||44621<=f&&f<=44647||44649<=f&&f<=44675||44677<=f&&f<=44703||44705<=f&&f<=44731||44733<=f&&f<=44759||44761<=f&&f<=44787||44789<=f&&f<=44815||44817<=f&&f<=44843||44845<=f&&f<=44871||44873<=f&&f<=44899||44901<=f&&f<=44927||44929<=f&&f<=44955||44957<=f&&f<=44983||44985<=f&&f<=45011||45013<=f&&f<=45039||45041<=f&&f<=45067||45069<=f&&f<=45095||45097<=f&&f<=45123||45125<=f&&f<=45151||45153<=f&&f<=45179||45181<=f&&f<=45207||45209<=f&&f<=45235||45237<=f&&f<=45263||45265<=f&&f<=45291||45293<=f&&f<=45319||45321<=f&&f<=45347||45349<=f&&f<=45375||45377<=f&&f<=45403||45405<=f&&f<=45431||45433<=f&&f<=45459||45461<=f&&f<=45487||45489<=f&&f<=45515||45517<=f&&f<=45543||45545<=f&&f<=45571||45573<=f&&f<=45599||45601<=f&&f<=45627||45629<=f&&f<=45655||45657<=f&&f<=45683||45685<=f&&f<=45711||45713<=f&&f<=45739||45741<=f&&f<=45767||45769<=f&&f<=45795||45797<=f&&f<=45823||45825<=f&&f<=45851||45853<=f&&f<=45879||45881<=f&&f<=45907||45909<=f&&f<=45935||45937<=f&&f<=45963||45965<=f&&f<=45991||45993<=f&&f<=46019||46021<=f&&f<=46047||46049<=f&&f<=46075||46077<=f&&f<=46103||46105<=f&&f<=46131||46133<=f&&f<=46159||46161<=f&&f<=46187||46189<=f&&f<=46215||46217<=f&&f<=46243||46245<=f&&f<=46271||46273<=f&&f<=46299||46301<=f&&f<=46327||46329<=f&&f<=46355||46357<=f&&f<=46383||46385<=f&&f<=46411||46413<=f&&f<=46439||46441<=f&&f<=46467||46469<=f&&f<=46495||46497<=f&&f<=46523||46525<=f&&f<=46551||46553<=f&&f<=46579||46581<=f&&f<=46607||46609<=f&&f<=46635||46637<=f&&f<=46663||46665<=f&&f<=46691||46693<=f&&f<=46719||46721<=f&&f<=46747||46749<=f&&f<=46775||46777<=f&&f<=46803||46805<=f&&f<=46831||46833<=f&&f<=46859||46861<=f&&f<=46887||46889<=f&&f<=46915||46917<=f&&f<=46943||46945<=f&&f<=46971||46973<=f&&f<=46999||47001<=f&&f<=47027||47029<=f&&f<=47055||47057<=f&&f<=47083||47085<=f&&f<=47111||47113<=f&&f<=47139||47141<=f&&f<=47167||47169<=f&&f<=47195||47197<=f&&f<=47223||47225<=f&&f<=47251||47253<=f&&f<=47279||47281<=f&&f<=47307||47309<=f&&f<=47335||47337<=f&&f<=47363||47365<=f&&f<=47391||47393<=f&&f<=47419||47421<=f&&f<=47447||47449<=f&&f<=47475||47477<=f&&f<=47503||47505<=f&&f<=47531||47533<=f&&f<=47559||47561<=f&&f<=47587||47589<=f&&f<=47615||47617<=f&&f<=47643||47645<=f&&f<=47671||47673<=f&&f<=47699||47701<=f&&f<=47727||47729<=f&&f<=47755||47757<=f&&f<=47783||47785<=f&&f<=47811||47813<=f&&f<=47839||47841<=f&&f<=47867||47869<=f&&f<=47895||47897<=f&&f<=47923||47925<=f&&f<=47951||47953<=f&&f<=47979||47981<=f&&f<=48007||48009<=f&&f<=48035||48037<=f&&f<=48063||48065<=f&&f<=48091||48093<=f&&f<=48119||48121<=f&&f<=48147||48149<=f&&f<=48175||48177<=f&&f<=48203||48205<=f&&f<=48231||48233<=f&&f<=48259||48261<=f&&f<=48287||48289<=f&&f<=48315||48317<=f&&f<=48343||48345<=f&&f<=48371||48373<=f&&f<=48399||48401<=f&&f<=48427||48429<=f&&f<=48455||48457<=f&&f<=48483||48485<=f&&f<=48511||48513<=f&&f<=48539||48541<=f&&f<=48567||48569<=f&&f<=48595||48597<=f&&f<=48623||48625<=f&&f<=48651||48653<=f&&f<=48679||48681<=f&&f<=48707||48709<=f&&f<=48735||48737<=f&&f<=48763||48765<=f&&f<=48791||48793<=f&&f<=48819||48821<=f&&f<=48847||48849<=f&&f<=48875||48877<=f&&f<=48903||48905<=f&&f<=48931||48933<=f&&f<=48959||48961<=f&&f<=48987||48989<=f&&f<=49015||49017<=f&&f<=49043||49045<=f&&f<=49071||49073<=f&&f<=49099||49101<=f&&f<=49127||49129<=f&&f<=49155||49157<=f&&f<=49183||49185<=f&&f<=49211||49213<=f&&f<=49239||49241<=f&&f<=49267||49269<=f&&f<=49295||49297<=f&&f<=49323||49325<=f&&f<=49351||49353<=f&&f<=49379||49381<=f&&f<=49407||49409<=f&&f<=49435||49437<=f&&f<=49463||49465<=f&&f<=49491||49493<=f&&f<=49519||49521<=f&&f<=49547||49549<=f&&f<=49575||49577<=f&&f<=49603||49605<=f&&f<=49631||49633<=f&&f<=49659||49661<=f&&f<=49687||49689<=f&&f<=49715||49717<=f&&f<=49743||49745<=f&&f<=49771||49773<=f&&f<=49799||49801<=f&&f<=49827||49829<=f&&f<=49855||49857<=f&&f<=49883||49885<=f&&f<=49911||49913<=f&&f<=49939||49941<=f&&f<=49967||49969<=f&&f<=49995||49997<=f&&f<=50023||50025<=f&&f<=50051||50053<=f&&f<=50079||50081<=f&&f<=50107||50109<=f&&f<=50135||50137<=f&&f<=50163||50165<=f&&f<=50191||50193<=f&&f<=50219||50221<=f&&f<=50247||50249<=f&&f<=50275||50277<=f&&f<=50303||50305<=f&&f<=50331||50333<=f&&f<=50359||50361<=f&&f<=50387||50389<=f&&f<=50415||50417<=f&&f<=50443||50445<=f&&f<=50471||50473<=f&&f<=50499||50501<=f&&f<=50527||50529<=f&&f<=50555||50557<=f&&f<=50583||50585<=f&&f<=50611||50613<=f&&f<=50639||50641<=f&&f<=50667||50669<=f&&f<=50695||50697<=f&&f<=50723||50725<=f&&f<=50751||50753<=f&&f<=50779||50781<=f&&f<=50807||50809<=f&&f<=50835||50837<=f&&f<=50863||50865<=f&&f<=50891||50893<=f&&f<=50919||50921<=f&&f<=50947||50949<=f&&f<=50975||50977<=f&&f<=51003||51005<=f&&f<=51031||51033<=f&&f<=51059||51061<=f&&f<=51087||51089<=f&&f<=51115||51117<=f&&f<=51143||51145<=f&&f<=51171||51173<=f&&f<=51199||51201<=f&&f<=51227||51229<=f&&f<=51255||51257<=f&&f<=51283||51285<=f&&f<=51311||51313<=f&&f<=51339||51341<=f&&f<=51367||51369<=f&&f<=51395||51397<=f&&f<=51423||51425<=f&&f<=51451||51453<=f&&f<=51479||51481<=f&&f<=51507||51509<=f&&f<=51535||51537<=f&&f<=51563||51565<=f&&f<=51591||51593<=f&&f<=51619||51621<=f&&f<=51647||51649<=f&&f<=51675||51677<=f&&f<=51703||51705<=f&&f<=51731||51733<=f&&f<=51759||51761<=f&&f<=51787||51789<=f&&f<=51815||51817<=f&&f<=51843||51845<=f&&f<=51871||51873<=f&&f<=51899||51901<=f&&f<=51927||51929<=f&&f<=51955||51957<=f&&f<=51983||51985<=f&&f<=52011||52013<=f&&f<=52039||52041<=f&&f<=52067||52069<=f&&f<=52095||52097<=f&&f<=52123||52125<=f&&f<=52151||52153<=f&&f<=52179||52181<=f&&f<=52207||52209<=f&&f<=52235||52237<=f&&f<=52263||52265<=f&&f<=52291||52293<=f&&f<=52319||52321<=f&&f<=52347||52349<=f&&f<=52375||52377<=f&&f<=52403||52405<=f&&f<=52431||52433<=f&&f<=52459||52461<=f&&f<=52487||52489<=f&&f<=52515||52517<=f&&f<=52543||52545<=f&&f<=52571||52573<=f&&f<=52599||52601<=f&&f<=52627||52629<=f&&f<=52655||52657<=f&&f<=52683||52685<=f&&f<=52711||52713<=f&&f<=52739||52741<=f&&f<=52767||52769<=f&&f<=52795||52797<=f&&f<=52823||52825<=f&&f<=52851||52853<=f&&f<=52879||52881<=f&&f<=52907||52909<=f&&f<=52935||52937<=f&&f<=52963||52965<=f&&f<=52991||52993<=f&&f<=53019||53021<=f&&f<=53047||53049<=f&&f<=53075||53077<=f&&f<=53103||53105<=f&&f<=53131||53133<=f&&f<=53159||53161<=f&&f<=53187||53189<=f&&f<=53215||53217<=f&&f<=53243||53245<=f&&f<=53271||53273<=f&&f<=53299||53301<=f&&f<=53327||53329<=f&&f<=53355||53357<=f&&f<=53383||53385<=f&&f<=53411||53413<=f&&f<=53439||53441<=f&&f<=53467||53469<=f&&f<=53495||53497<=f&&f<=53523||53525<=f&&f<=53551||53553<=f&&f<=53579||53581<=f&&f<=53607||53609<=f&&f<=53635||53637<=f&&f<=53663||53665<=f&&f<=53691||53693<=f&&f<=53719||53721<=f&&f<=53747||53749<=f&&f<=53775||53777<=f&&f<=53803||53805<=f&&f<=53831||53833<=f&&f<=53859||53861<=f&&f<=53887||53889<=f&&f<=53915||53917<=f&&f<=53943||53945<=f&&f<=53971||53973<=f&&f<=53999||54001<=f&&f<=54027||54029<=f&&f<=54055||54057<=f&&f<=54083||54085<=f&&f<=54111||54113<=f&&f<=54139||54141<=f&&f<=54167||54169<=f&&f<=54195||54197<=f&&f<=54223||54225<=f&&f<=54251||54253<=f&&f<=54279||54281<=f&&f<=54307||54309<=f&&f<=54335||54337<=f&&f<=54363||54365<=f&&f<=54391||54393<=f&&f<=54419||54421<=f&&f<=54447||54449<=f&&f<=54475||54477<=f&&f<=54503||54505<=f&&f<=54531||54533<=f&&f<=54559||54561<=f&&f<=54587||54589<=f&&f<=54615||54617<=f&&f<=54643||54645<=f&&f<=54671||54673<=f&&f<=54699||54701<=f&&f<=54727||54729<=f&&f<=54755||54757<=f&&f<=54783||54785<=f&&f<=54811||54813<=f&&f<=54839||54841<=f&&f<=54867||54869<=f&&f<=54895||54897<=f&&f<=54923||54925<=f&&f<=54951||54953<=f&&f<=54979||54981<=f&&f<=55007||55009<=f&&f<=55035||55037<=f&&f<=55063||55065<=f&&f<=55091||55093<=f&&f<=55119||55121<=f&&f<=55147||55149<=f&&f<=55175||55177<=f&&f<=55203?10:9757==f||9977==f||9994<=f&&f<=9997||127877==f||127938<=f&&f<=127940||127943==f||127946<=f&&f<=127948||128066<=f&&f<=128067||128070<=f&&f<=128080||128110==f||128112<=f&&f<=128120||128124==f||128129<=f&&f<=128131||128133<=f&&f<=128135||128170==f||128372<=f&&f<=128373||128378==f||128400==f||128405<=f&&f<=128406||128581<=f&&f<=128583||128587<=f&&f<=128591||128675==f||128692<=f&&f<=128694||128704==f||128716==f||129304<=f&&f<=129308||129310<=f&&f<=129311||129318==f||129328<=f&&f<=129337||129341<=f&&f<=129342||129489<=f&&f<=129501?t:127995<=f&&f<=127999?14:8205==f?15:9792==f||9794==f||9877<=f&&f<=9878||9992==f||10084==f||127752==f||127806==f||127859==f||127891==f||127908==f||127912==f||127979==f||127981==f||128139==f||128187<=f&&f<=128188||128295==f||128300==f||128488==f||128640==f||128658==f?i:128102<=f&&f<=128105?u:11}return this.nextBreak=function(e,r){if(void 0===r&&(r=0),r<0)return 0;if(r>=e.length-1)return e.length;for(var n,t,i=o(f(e,r)),u=[],a=r+1;a<e.length;a++)if(t=a-1,!(55296<=(n=e).charCodeAt(t)&&n.charCodeAt(t)<=56319&&56320<=n.charCodeAt(t+1)&&n.charCodeAt(t+1)<=57343)){var c=o(f(e,a));if(h(i,u,c))return a;u.push(c)}return e.length},this.splitGraphemes=function(e){for(var r,n=[],t=0;(r=this.nextBreak(e,t))<e.length;)n.push(e.slice(t,r)),t=r;return t<e.length&&n.push(e.slice(t)),n},this.iterateGraphemes=function(e){var r=0,n={next:function(){var n,t;return(t=this.nextBreak(e,r))<e.length?(n=e.slice(r,t),r=t,{value:n,done:!1}):r<e.length?(n=e.slice(r),r=e.length,{value:n,done:!1}):{value:void 0,done:!0}}.bind(this)};return"undefined"!=typeof Symbol&&Symbol.iterator&&(n[Symbol.iterator]=function(){return n}),n},this.countGraphemes=function(e){for(var r,n=0,t=0;(r=this.nextBreak(e,t))<e.length;)t=r,n++;return t<e.length&&n++,n},this})}}]);
//# sourceMappingURL=842.js.map