export default function startpage(){
    return`
        <header>
            <div class="container">
                <div id="branding">
                    <h1>About Me</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">首頁</a></li>
                        <li><a href="#about_me">關於我</a></li>
                        <li><a href="#">作品集</a></li>
                        <li><a href="#contact_me">聯絡我</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section class="showcase">
            <div class="container">
                <h1>只有分外努力，才能讓自己顯得毫不費力</h1>
                <p id="content1">來自高雄高商，目前就讀於高科大智商系，目標是成長為具有資訊素養的程式設計人才</p>
            </div>
        </section>
        <section class="content container">
            <h2 id="about_me">關於我</h2>
            <p>我是孫葦傑，目前就讀國立高雄科技大學智慧商務系，在高中時期曾參與不少專題競賽累積自己的實務開發經驗，上大學後正在繼續累積自己的專業知識，期望未來的自己可以成為一個脊椎很直的人，畢竟成功的人背後都有一條脊椎。</p>
            <h2>技能與競賽紀錄</h2>
            <div class="skills-competitions">
                <div class="skills">
                    <h2>技能</h2>
                    <div class="skill">
                        <div class="skill-name">HTML/CSS/JavaScript</div>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 90%;">80%</div>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-name">Python/Django</div>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 75%;">75%</div>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-name">PHP/MySQL</div>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 90%;">90%</div>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-name">Linux</div>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 70%;">70%</div>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-name">Word/PPT/Excel</div>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 95%;">95%</div>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-name">Canva</div>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 90%;">90%</div>
                        </div>
                    </div>
                </div>
                <div class="competitions">
                    <h2>競賽紀錄及證照</h2>
                    <ul>
                        <li class="first">111年教育部全國專題創意競賽電腦應用組　佳作</li>
                        <li class="second">全國高中智慧生活創新創業競賽　第二名</li>
                        <li class="third">第三屆高科盃商業智慧競賽－實作組　佳作</li>
                        <li class="third">第二屆高科盃商業智慧競賽－概念組　入圍</li>
                        <li class="second">屏東大學全國高中職專題競賽　優勝</li>
                        <li class="second">111年正修科大商管群專題競賽　第二名</li>
                        <li class="third">全國高中小論文寫作比賽　優等</li>
                        <li class="first">ICDL 國際資訊安全證照</li>
                        <li class="third">國教署全國專題實作及創意競賽　入圍</li>
                    </ul>
                </div>
            </div>
            <div class="contact_me">
                <h2 id="contact_me">聯絡我</h2>
                <a href="https://www.instagram.com/wei._.0708" target="_blank" class="contact-item"><i class="fab fa-instagram"></i> INS：wei._.0708</a>
                <a href="https://www.facebook.com/profile.php?id=100021011268543&locale=zh_TW" target="_blank" class="contact-item"><i class="fab fa-facebook"></i> FB：孫葦傑</a>
                <a href="" target="_blank" class="contact-item"><i class="fab fa-line"></i> LINE：2005.07.08</a>
                <a href="" class="contact-item"><i class="fas fa-phone"></i> TEL：0975132553</a>
            </div>
        </section>
        <button id="backToTopBtn" title="返回頂端">↑</button>
    `;
}