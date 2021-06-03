<template>
  <div class="OCRContent">
    <div class="textBox">
      <div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">天津市公安局和平分局</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">起诉意 见书</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">津和公（案）刑诉字〔2017〕106号</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">犯罪嫌疑人<span :class="{'yellowtext': isShowMan}">马团</span>，男，1980年**月**日出生，公民身份号码4123271980*******，汉</span>
        </div>
        <div style="width: 100%; overflow-wrap: break-word;"><span
          style="overflow-wrap: break-word;">族，大学文化，天津铁成资产管理有限公司股东，住北京市朝阳区*路**小区**号楼**门**号（户籍地:陕西省西安市碑</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">林区**巷**楼**单元**层**号）。因本案于<span :class="{'greentext': isShowDate}">2015年6月10日</span>被天津市公安局和平分局刑事拘留，<span
          :class="{'greentext': isShowDate}">同年7月10日</span>经天津市和平</span>
        </div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">区人民检察院批准逮捕，同日由天津市公安局和平分局执行逮捕。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">辩护律师:林文祥，天津**律师事务所，执业证号18772213322231</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span
          style="overflow-wrap: break-word;"><span :class="{'greentext': isShowDate}"></span>天津铁成资产管理有限公司在天津市非法吸收公众存款案，由
          <span :class="{'redtext': isShowMan}" @click="showModal">马团结</span>，于<span :class="{'greentext': isShowDate}">2015年2月2日</span>报案至天津市公安</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span
          style="overflow-wrap: break-word;">局武清分局，武清分局经过审查，于<span :class="{'greentext': isShowDate}">2015年3月2日</span>立案进行侦查。<span :class="{'greentext': isShowDate}">2015年5月10日</span>该案经武清分局指定由我局管辖。犯罪嫌</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span
          style="overflow-wrap: break-word;">疑人<span :class="{'yellowtext': isShowMan}">马团</span>于2016年5月10日主动到和平区和平路派出所投案，次日被我局刑事拘留，<span :class="{'greentext': isShowDate}">同年12月22日</span>因有团伙作案重大嫌疑</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span
          style="overflow-wrap: break-word;">被我局延长拘留期限至<span :class="{'greentext': isShowDate}">2017年2月30日</span>，<span :class="{'greentext': isShowDate}">同年1月2日</span>因涉嫌非法吸收公众存款罪被天津市人民检察院第一分院批准逮捕，次</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">日被我局执行逮捕，现羁押于天津市第一看守所。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">经依法审查查明:<span :class="{'greentext': isShowDate}">2013年5月</span>，犯罪嫌疑人<span :class="{'yellowtext': isShowMan}">马团</span>在天津注册成立天津铁成资产管理有限公司，<span
          :class="{'yellowtext': isShowMan}">马团</span>任公司总经理;</span>
        </div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">后于<span :class="{'greentext': isShowDate}">2014年9月</span>在天津注册天津大金资产管理有限公司，<span :class="{'yellowtext': isShowMan}">马团</span>任该公司法定代表人。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">天津铁成资产管理有限公司注册成立后，犯罪嫌疑人<span :class="{'yellowtext': isShowMan}">马团</span>指示<span>张亚平</span>在天津市和平区南山路18号3楼设立融资分部</span>
        </div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">（以下简称南山路铁成），该分部未经有关部门批准，以天津铁成资产管理有限公司的名义向社会招聘融资业务员，采用</span>
        </div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">发放宣传页、召开客户答谢会、扣扣相传等方式，以天津铁成资产管理有限公司投资的建联高科、网图车程等项目对外进</span>
        </div>
        <div style="width: 100%; overflow-wrap: break-word;"><span
          style="overflow-wrap: break-word;">行宣传，并使用天津铁成资产管理有限公司作为借款合同的担保方或管理方，以月息1分6到2分为诱饵面向<span :class="{'redtext': isShowMan}">马团结</span>等社会不</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span
          style="overflow-wrap: break-word;">特定人员非法吸收公众存款。经天津市审会计事务所有限公司司法会计鉴定:2013年3月至2014年12月，<span :class="{'yellowtext': isShowMan}">马团</span>管理并负责</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span
          style="overflow-wrap: break-word;">天津铁成资产管理有限公司天津铁成资产管理有限公司期间南山路铁成吸收社会公众存款（期间为2013年3月至2014年2</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">月）金额为9，920，000元，涉及人数78人，已归还本金金额为3,510,000元，未兑付本金金额6,410,000元，涉及人数56</span>
        </div>
        <div style="width: 100%; overflow-wrap: break-word;"><span
          style="overflow-wrap: break-word;">人，其中天津铁成资产管理有限公司使用资金未兑付金额1,960,000元。上述所融资金主要由<span :class="{'yellowtext': isShowMan}">马团</span>具体调配使用。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">认定上述事实的证据如下:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">犯罪嫌疑人供述和辩解、被害人陈述、证人证言、书证、视听资料、鉴定意见、银行流水等。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">上述犯罪事实清楚，证据确实、充分、足以认定。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">综上所述，犯罪嫌疑人<span :class="{'yellowtext': isShowMan}">马团</span>的行为触犯了《中华人民共和国刑法》第一百七十六条之规定，涉嫌非法吸收公众存款</span>
        </div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">罪，根据《中华人民共和国刑事诉讼法》第一百六十条之规定，现将此案移送审查起诉</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">此致</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">天津市公安局和平分局</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">2017年10月26日</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">附:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">1.犯罪嫌疑人张亚平现取保候审，其余犯罪嫌疑人均羁押于天津市第一看守所。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">2.本案卷宗材料和证据238册，审计报告18册。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">3.证人、鉴定人名单。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">4.涉案款物一并移交。</span></div>
      </div>
    </div>
    <div class="textBox">
      <div style="padding: 50px 0px 0px; max-width: 100%; position: relative;">
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;"><span class="blueText">公安局刑警大队讯问笔录</span></span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">天津市公安局和平分局刑侦.侦查员姓名、单位</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">天津市公安局和平分局刑警大队李XX</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">天津市公安局和平分局201X_年6月3日10时</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">地点天津市公安局和平分局</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">姓名、单位张XX 天津市公安局和平分局、侦查员姓名</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">李X天津市公安局和平分局</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">罪嫌疑人:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">马团</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我们是天津市公安局的民警，现在依法对你进行讯问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你要如实回答我们的提问，听清楚了吗</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我听清楚了。问.</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你叫什么名字?答，</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我叫马团结。问.</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你有外号吗?答，</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">没有。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">性别?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">男。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">出生日期?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">1989年12月16日生。问</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">出生地?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">天津市。问:</span></div>
      </div>
    </div>
    <div class="textBox">
      <div style="padding: 50px 0px 0px; max-width: 100%; position: relative;">
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">民族?～答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">汉族。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">文化程度。答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">高中文化。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">家庭住址?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">天津市某小区一幢101室。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">工作单位?共6页:上一页156</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">无业。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">说说你的家庭情况呢?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">父亲:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">许XX，45岁，无业，刚刑满释放回家。母亲:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">刘XX，两年前因父亲入狱病逝。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你的社会经历呢?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">年前父亲入狱后就把高中念完就不念了。后来在一家夜总会当</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">公问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">这是《犯罪嫌疑人诉讼权利义务告知|5》，你看一下，如果不识字，</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我们可以给你宣读;如果看不懂，可以问我们。答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我看一下(详细看《犯罪嫌疑人权利义务告知书》约10分钟)。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你看清楚了吗?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">看清楚了。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">有什么要求?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">没有。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">知不知道我们为什么抓你啊?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">知道，王虎死了嘛，你们怀疑是我干的。说实话，王虎死了，我</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">心里叫好，可这事让我干，我还真有点下不了手，我不是那种人。我</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">这人很窝囊，这辈子也就这么窝囊下去了。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">201X年5月28日上午10点到12点你在哪?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">那天星期六，我在家睡觉。问;有人给你证明吗?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">没有，我爸去看我外婆了，我妈死得早，外婆很可怜，我爸觉得</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">对不起他。问:</span></div>
      </div>
    </div>
    <div class="textBox">
      <div style="padding: 50px 0px 0px; max-width: 100%; position: relative;">
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">那5月29日上午8时到10点之间呢，你在哪?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">还是在家睡觉，我没有朋友，也没人给我证明。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你爸是怎么去你外婆家的?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">开我们家的车去的。共6页:上一页156</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">什么车?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">捷达轿车。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你们家有几辆捷达轿车?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">就一辆啊，还是当年我爸有钱的时候买的。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">家里还有桑塔纳吗?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">没有啊，我爸进去以后，家里就家徒四壁了，哪有钱买车??问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">据我们调查，有人问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">据我们调查，有人在5月28日11点时左右在现场附近看到你开</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">着捷达轿午出现过，并且小区监控录像也显示你在现场附近出现过，</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你怎么解释?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">怎么可能，我已经说过了，捷达轿车被我爸开去我外婆家了，我</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">哪来的捷达轿车啊。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你很聪明，那你爸当幌子。不过我告诉你，我们调查过当天我市</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">所有汽车租赁公司的租车记录，显示当天你曾租过一辆跟你们家相同</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">车型的捷达轿车。怎么解释?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">哦，我想起来了。那天我在家睡觉睡得尤聊，心里烦，就租了辆</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">车，出去兜风，散散心。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">心里烦?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">对，自从三年前我爸进去以后，高中谈的女朋友也吹了，原来的</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">朋友也没了，最重要的是我妈也病死了，长期以来觉都睡不好，心里</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">很烦。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">那你一定很恨把你们家害成这样的王虎吧?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我凭什么恨人家啊，只怪自己老子不争气，把好好一个家毁了。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">可你知道王虎是始作俑者。答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我没有，我的度量是你不能理解的。这种人会有报应的，不必我</span></div>
      </div>
    </div>
    <div class="textBox">
      <div style="padding: 50px 0px 0px; max-width: 100%; position: relative;">
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">出手。这不，报应来了。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">这笔帐先给你记着。再来说说捷达轿车的问题。那天你开着车都</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">去哪了?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我瞎逛，开着车绕了大半个城。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">有人给你证明吗?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">没有，就我一个人。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你逛了多长时间?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">从上午九点一直到下午一点左右吧。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">那你有充足的作案时间啊?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">可这并不能证明是我干的，不要再我身上浪费时间了，快去抓真</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">正的凶手吧。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你开着车有没有去过郊区、野外、建筑工地之类比较脏的地方?</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">（沉默）没有。好像没有共6页:上一页156</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">好像?你在给白己的狡辩留退路。答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">那么长时间了，哪还记得啊，而且我记忆力比较差，问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我们去汽车和赁公司调查过，他们的业务员对你印象特别深刻，,</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你知道为什么吗?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">这我哪知道啊，可能我长得太帅了吧问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我们去汽车租赁公司调查过，他们的业务员对你印象特别深刻，</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你知道为什么吗?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">这我哪知道啊，可能我长得太帅了吧，这可不是我的错，你们不</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">能因此怀疑我杀人的。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">严肃点，你以为你这是在哪啊。据我所知，那天天气状况非常好，</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">无风无雨，但是据那个业务员反映，当天你还车的时候，把车洗得干</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">干净净的，尤其是轮胎，你又怎么解释?～答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">这是我个人品质所决定的，难道您觉得借了别人的车子，在还车</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">的时候为对方加满油，或者至少冲洗一下车子,有什么不妥吗?问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你的这种做法值得欣赏，可是我们在案发现场附近发现了和你汽</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">车相同的轮胎印。答:</span></div>
      </div>
    </div>
    <div class="textBox">
      <div style="padding: 50px 0px 0px; max-width: 100%; position: relative;">
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">这只能作为我被怀疑的理由之一，却不是断定我作案的证据，至</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">少车轮磨损程度和那辆车一样的所有捷达轿车，不论本地的还是外地</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">的，你们都查清了吗?问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你可以嘴硬，不过我还是愿意接着和你探讨下去。如果几个疑点</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">都在你身上交叉而过，你觉得你的嫌疑是不是值得重视?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">而且要相当的重视。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">好，车的问题先到这。马团，认得这个盒子吗?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">和我家原来的那个差不多。不过我们家那个已经被我烧掉了。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我们准备叫你父亲来辨认一下这个盒子。答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">同样的麻将牌盒多了，我父亲又不会专门订做这个。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">假如这个上面有特殊的标记呢?比如说你父亲的名字之类的?</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">名字?这上面有我爸名字?（怀疑、沉默）这不过是你们的假设</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">罢了，如果真的是这样，你们何苦非那么大周折呢?问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">看来你对我们的侦查手段有一定的研究，不过如果我们通过技术</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">手段判定这个麻将盒就是你们家的，你前面已经说过了，它已经被你</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">烧掉了，那你怎么解释?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">木来就已经烧掉了，不存在解释。除非你们搞错了。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你的确很聪明，好，给你一个小问题，你帮我推断一下。假设这</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">个麻将牌就是你们家的，是不是可以判定你或者你父亲和王虎的凶杀</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">案有关?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">未必吧。首先我父亲没有作案时间，可以先一步排除，而我虽然</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">有作案时间，但是你们缺乏直接的证据;其次，就算是那副麻将牌，</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">谁知道是不是被人偷走了呢?问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你怎么知道你父亲没有作案时间?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你们不是调查过了吗?问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">不，我问的是，你怎么知道王虎在什么时间被杀的呢?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">（犹豫，摸鼻子）我也是假设呀，假设我是警察，警察怎么可能</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">不知道被害者的死亡时间呢?况且在你们到我家调查的过程中,我已</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">经分析过了，应该就是在我爸去我外婆家的当天中午左右吧，我没猜</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">错吧?问:</span></div>
      </div>
    </div>
    <div class="textBox">
      <div style="padding: 50px 0px 0px; max-width: 100%; position: relative;">
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">可是如果作为侦探，你还是不合格。答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">那你帮我提高提高呗?问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">有一个关键问题被你忽略了?我一直在说，找到了麻将牌的主人</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">就找到了凶手，你并没有提出任何疑问，说明在你的心里，已经认可</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">了这个前提，那么你是怎么知道这副麻将牌和王虎的死是有关的呢?</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">难道不是你们一直这样暗示我吗?共6页:上一页156</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">记着，这是我们怀疑你的又一点。答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我觉得你这是在诱供。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你懂的确实不少，没少看侦探小说吧?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">错了，我天生就有侦探头脑，想当年我差点上了作为全国警校龙</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">头老大的江苏警官学院的。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">还有一个问答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">错了，我天生就有侦探头脑，想当年我差点上了作为全国警校龙</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">头老大的江苏警官学院的。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">还有一个问题需要您解释?您手指上的伤是怎么回事?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">被钉子扎的。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">什么时候扎的?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">就前几天吧。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">具体点?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">5月28日。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">就是王虎被害当天?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">那又怎样，我的手指是被钉子扎的，难道这也能证明我是凶手?</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我提醒你们,光靠推理破案,那是日本动画片的故事,想判定我有罪?</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">好拿出证据来，有本事就拿出来，搞来搞去给我下套子，算什么本事</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">啊?问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你想干什么，你太嚣张了。答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你不是想刑讯逼供吧?问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">这个是我们从你手指伤换药的诊所提取的你换下的纱布，根据我</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">们法医的检验，在纱布里发现了只有人类牙龈损失后才会有的特殊菌</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">广菅冈</span></div>
      </div>
    </div>
    <div class="textBox">
      <div style="padding: 50px 0px 0px; max-width: 100%; position: relative;">
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">类，经过与王虎牙龈细菌样本的进一步比照，确定你的手指伤与王虎</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">有直接联系。现在，你还有什么解释?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">（沉默)。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">如果这个世界上真的有灵魂的话，你的母亲会为你所做的感到欣</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">慰吗?答，会的，我妈会支持我的，王虎害死了我妈，毁了我们全</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">家，我为她报仇了。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">那你爸呢，他已经经历了丧妻之痛?你还要在让他经历一次丧子</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">之痛?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">（沉默）今天我爸生日，只要你们允许我为他买个蛋糕，我就交</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">代。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">这个我可以答应你。答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">王虎是我杀的，他必须死。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">那张大李?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">也是我杀的，这一切都是我操纵的，张大李只不过是我的一条狗。</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">给工虎拜牌局吃麻将牌的点子是你想出来的吧?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">点子?这叫创意。一个人就算死也要死得有特点，要死得符合他</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">的身份。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">现在说说你是怎么杀死张大李的?共6页:上一页156</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">答:你们有我杀张大李的证据吗?问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">张大李死亡现场你虽然没有留下任何痕迹，但我们再你的卧室搜</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">到了饯和信用卡。怎么解释?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">至少我没在张大李家给你们留下任何线索吧。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你是用一种极端的手段向我们说明张问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">张大李死亡现场你虽然没有留下任何痕迹，但我们再你的卧室搜</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">到了钱和信用卡。怎么解释?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">至少我没在张大李家给你们留下任何线索吧。问:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">你是用一种极端的手段向我们说明张大李绝对不是自杀这样的事</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">实。你为什么要杀张大李?答:</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">我杀他一方面是为了灭口，同时也因为王虎拉拢我爸赌博的时候，</span></div>
        <div style="width: 100%; overflow-wrap: break-word;"><span style="overflow-wrap: break-word;">张大李当过他的帮凶，所以他的死也是死得其所。问:</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OCRContent",
    props: ['isShowMan', 'isShowDate'],
    methods: {
      showModal() {
        this.$emit('showModal', '')
      }
    }
  }
</script>

<style>
  .yellowtext {
    background-color: yellow;
  }

  .greentext {
    background-color: #67c23a;
  }

  .redtext {
    background-color: #f56c6c;
    color: #fff;
  }

  .blueText {
    background-color: #409EFF;
  }
</style>
