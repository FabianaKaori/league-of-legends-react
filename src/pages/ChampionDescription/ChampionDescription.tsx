import styles from './ChampionDescription.module.css'
import { useEffect, useState } from 'react'

function ChampionDescription() {
    const [riotApi] = useState<string>("https://ddragon.leagueoflegends.com")
    const [teste] = "Nami"

    



    return (
        <>
            <div className={styles.container}>
                <section className={styles.sectionFirst}>
                    <div className={styles.backgroundSection}>
                        <img src='http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg' />
                    </div>

                    <div className={styles.titleContainer}>
                        <div className={styles.descriptionTitleChampion}>
                            <img src='http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg' />
                            <div className={styles.groupTitle}>

                                <div className={styles.spanGroupTitle}>
                                    <span className={styles.spanDescriptionChampionTitle}>O REI DESTRUÍDO</span>
                                    <span className={styles.spanNameChampion}>VIEGO</span>
                                </div>

                            </div>
                            <div className={styles.containerTypeBarDifficulty}>
                                <div>
                                    <img src='src/assets/ChampionDescription/Logo/Assassin.svg' />
                                    <span>FUNÇÃO</span>
                                    <span>ASSASSINO</span>
                                </div>
                                <div>
                                    <div>barrinha</div>
                                    <span>DIFICULDADE</span>
                                    <span>MODERADO</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Outrora regente de um reino perdido, Viego morreu há mais de um milênio, quando uma tentativa de trazer sua esposa de volta à vida culminou em uma catástrofe mágica conhecida como "a Ruína". Transformado em um poderoso espectro morto-vivo, e sempre sendo torturado pela paixão obsessiva que sente por sua rainha morta há séculos, Viego agora é conhecido como o Rei Destruído. Hoje, ele controla os Tormentos enquanto assola Runeterra em busca de qualquer coisa que possa trazê-la de volta, destruindo tudo que estiver em seu caminho conforme a Névoa Negra emana de seu cruel coração partido.</p>
                        </div>
                    </div>
                </section>
                {/* <section>
                    <div>
                        ----------------------------------<br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus animi hic non, ipsum harum inventore fugiat facilis illum molestiae eius rerum. Voluptatibus dolorum vel, illum hic beatae nemo delectus doloremque dolore? Voluptate veritatis optio facere saepe molestiae cum, quod excepturi eos asperiores ut repellendus minus corrupti mollitia, harum eveniet neque aspernatur expedita, ex alias sapiente illum in voluptas impedit. Magni quis consequatur exercitationem, obcaecati ab amet, reiciendis, quasi minima optio ducimus minus facere nam? Repellat architecto perferendis dolores reprehenderit inventore incidunt fugit optio similique nesciunt nobis repudiandae aliquid ab, dolorum accusamus enim explicabo eos ducimus maxime adipisci. Quas officiis quaerat adipisci harum quo molestias est cumque quod, porro architecto. Vel libero doloremque voluptatum, quo dicta incidunt quidem! Ipsa, repellat saepe esse, ad repellendus ullam hic officiis animi sit dolores, doloremque adipisci excepturi error labore assumenda aliquam ratione nisi deleniti temporibus tenetur? Animi corrupti consequuntur molestias quia praesentium reprehenderit doloremque quas, quos soluta labore ipsa numquam modi eos enim assumenda alias! Nisi voluptate recusandae autem iusto molestias voluptas nihil, nostrum nam at reprehenderit porro cumque! Laudantium corrupti iure ratione repudiandae! Ad cumque facilis aliquam officia molestias ipsum atque illo! Eligendi, assumenda numquam possimus architecto ad recusandae. Vero voluptatem corrupti totam nemo error vel reprehenderit nostrum minus neque iure dolorum adipisci, molestiae tempore, dolor repellendus harum numquam obcaecati ab aperiam quisquam facilis rem. Tempore consequatur facere voluptatibus impedit. Cumque dolorum aliquid aut esse non necessitatibus labore distinctio et hic repudiandae saepe ipsa optio quam quibusdam, voluptatum velit suscipit totam possimus dicta corrupti, modi delectus odit. Odit dolorem assumenda est officiis, sapiente dolore nobis sit iusto ullam reiciendis quidem hic quos labore cum voluptas, optio animi tempora nemo tenetur eos molestias magni totam modi fugiat! Reiciendis repellat aspernatur iusto tempore velit aliquid eos obcaecati reprehenderit, itaque, ratione quos, nihil esse. Ad sapiente ipsam quaerat hic? Vel, eius porro natus repellendus hic excepturi vero aperiam alias molestiae aliquam dolorum obcaecati tempore voluptatem consectetur sequi similique eaque harum quidem ut laboriosam voluptate repellat optio cupiditate! Quos exercitationem dolore quo ea! Dicta similique, nulla recusandae voluptatibus porro incidunt deleniti eos enim, praesentium vero quia repellendus, distinctio magnam at officiis nostrum id perspiciatis earum laboriosam autem? Fugit at, animi aut labore quasi alias mollitia architecto laborum dolore impedit expedita doloremque quod amet fuga voluptatem? Alias, corporis minus! Dicta quo obcaecati porro dolores maiores laboriosam quia repellat, architecto cum iure blanditiis reprehenderit, repellendus neque eveniet ut eos praesentium et laborum ex delectus vel quam tempora eius. Ullam nulla expedita aperiam quidem illum totam numquam earum velit nesciunt soluta! Vitae consequatur exercitationem reprehenderit laborum iure ipsa recusandae. Alias iusto veniam repellendus ad atque quam officia enim nisi. Provident esse, sed ex ullam suscipit cupiditate asperiores dolores eos nemo, voluptatem omnis fugit? Reprehenderit aperiam quae laborum ab veniam voluptates repellat dolor velit laudantium! Porro veniam dolorum fugiat eum ex animi earum, quisquam ratione quae quam deserunt tempore vitae voluptates aperiam hic eius assumenda voluptatem repellat, recusandae minus deleniti unde vel! Adipisci, ipsum sapiente itaque exercitationem illo dolores ipsam assumenda suscipit inventore quia a rerum harum ducimus aperiam, voluptatum cumque expedita voluptate praesentium? Dicta, magnam. Dolores at a voluptate. Iure accusantium dolores odio corrupti beatae perferendis veritatis hic magnam repellat? Optio, repudiandae obcaecati! Magni distinctio, illo blanditiis culpa eveniet molestiae in doloremque qui voluptates tempora autem iste labore inventore repellendus temporibus officia et. Omnis labore ratione magni, provident vel commodi? Quas, sequi sed placeat est culpa labore eveniet veritatis tempore minus temporibus. Sint eos beatae delectus odio dolor! Expedita laboriosam nemo suscipit dicta praesentium sequi, blanditiis libero, voluptates ipsa minima iusto rerum eum dolores harum numquam repellendus magni non consequuntur! Pariatur, vitae temporibus laboriosam rerum natus dolores incidunt soluta consequatur minima molestias officiis ratione fuga, harum assumenda officia, eligendi culpa totam quod porro. Officia expedita soluta corporis, perspiciatis dignissimos illo temporibus maiores vero rem, quo ducimus. Eaque, aspernatur rem! Voluptate quisquam dolores recusandae quos, similique voluptatem. Laborum perspiciatis fugiat animi voluptatibus. Rem suscipit, vel iusto dolor, nesciunt beatae corporis saepe fugit aspernatur ipsa cupiditate harum sit quod ducimus recusandae, et deserunt magnam delectus eligendi repellat! Atque voluptas assumenda voluptatibus ipsam necessitatibus exercitationem adipisci, id mollitia, laborum labore excepturi blanditiis illo vel. Consequuntur enim sit eveniet eaque doloremque optio excepturi iure commodi est dolorem aliquam voluptatum tempora fugiat itaque voluptas placeat quisquam reprehenderit repellendus cum unde rem eum, beatae impedit? Reprehenderit molestiae laboriosam necessitatibus similique, commodi expedita! Facere, illum et? Voluptate, dolores nam. Voluptatibus dolorum, aliquid architecto veritatis impedit maiores ex natus excepturi, vero rem sed. Reiciendis eum praesentium ex ea sit aut ullam qui quisquam, unde, voluptatem, deserunt sint. Obcaecati accusamus autem nam delectus placeat nesciunt aperiam aliquid nobis facere nisi laudantium voluptatum officiis molestias corrupti architecto fuga natus quaerat, maxime pariatur error totam, libero aut. Earum sequi officiis provident. Dicta praesentium eos tenetur sequi adipisci? Voluptatem ducimus dolores repellat exercitationem dolore, commodi culpa necessitatibus, aut corporis eaque earum labore iste quis deleniti, incidunt expedita recusandae quos consequatur? Doloribus ipsa quos, provident corporis et quae aliquid minima obcaecati dicta natus non error illum ut laboriosam explicabo velit eveniet voluptatum totam, officia eaque aspernatur, perferendis ratione. Quisquam qui aperiam recusandae culpa, ipsam et adipisci tenetur voluptate ipsa provident pariatur quae odit repudiandae magni laborum vero architecto aut nisi nesciunt. Iste suscipit ipsum aliquam, illo vel quibusdam, minima veritatis excepturi tempora illum accusamus dolor assumenda quo aperiam omnis vero ut! Sed animi minima ipsa saepe dolorem fugit laudantium ut provident veniam dicta, officia id in quibusdam reiciendis adipisci, enim quam magni impedit? Doloremque quidem odit cupiditate aut vel delectus reprehenderit doloribus mollitia veritatis nemo neque distinctio assumenda nisi maiores similique, expedita corporis facilis. Autem dolore culpa quas fugiat esse, magnam cum est fugit repellat, voluptates nesciunt accusamus quaerat harum necessitatibus? Hic perspiciatis quod ea, quis minima error praesentium corrupti aut distinctio delectus architecto itaque voluptatem. Sit commodi rem a beatae voluptatibus maxime molestias minus similique dolor cupiditate cumque illum hic quis non optio harum rerum eos quo quae assumenda nam, repudiandae minima omnis. Ex praesentium assumenda sint corporis nihil reiciendis totam numquam eveniet?
                    </div>
                </section> */}
            </div>
        </>
    );
}

export default ChampionDescription
