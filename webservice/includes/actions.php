<?php
/**
 * @return array
 */
function getAnime()
{
    return [
        [
            "id" => 1,
            "name" => "Attack on Titan",
            "studio" => "MAPPA",
        ],
        [
            "id" => 2,
            "name" => "Black Clover",
            "studio" => "Studio Pierrot",
        ],
        [
            "id" => 3,
            "name" => "Boruto",
            "studio" => "Studio Pierrot",
        ],
        [
            "id" => 4,
            "name" => "Demon Slayer",
            "studio" => "Ufotable",
        ],
        [
            "id" => 5,
            "name" => "Jujutsu Kaisen",
            "studio" => "Yokohama Animation Lab",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getAnimeDetails($id)
{
    $details = [
        1 => [
            "id" => 1,
            "name" => "Attack on Titan",
            "imgUrl" => "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
            "description" => "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations. After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.",
            "genres" => ['Action', 'Drama', 'Fantasy', 'Mystery'],
            "studio" => "MAPPA",
        ],
        2 => [
            "id" => 2,
            "name" => "Black Clover",
            "imgUrl" => "https://cdn.myanimelist.net/images/anime/2/88336.jpg",
            "description" => "Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the 'Wizard King'—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically. When they reach the age of 15, Yuno is bestowed a spectacular Grimoire with a four-leaf clover, while Asta receives nothing. However, soon after, Yuno is attacked by a person named Lebuty, whose main purpose is to obtain Yuno's Grimoire. Asta tries to fight Lebuty, but he is outmatched. Though without hope and on the brink of defeat, he finds the strength to continue when he hears Yuno's voice. Unleashing his inner emotions in a rage, Asta receives a five-leaf clover Grimoire, a 'Black Clover' giving him enough power to defeat Lebuty. A few days later, the two friends head out into the world, both seeking the same goal—to become the Wizard King!",
            "genres" => ['Action', 'Comedy', 'Fantasy'],
            "studio" => "Studio Pierrot",
        ],
        3 => [
            "id" => 3,
            "name" => "Boruto",
            "imgUrl" => "https://cdn.myanimelist.net/images/anime/9/84460.jpg",
            "description" => "Following the successful end of the Fourth Shinobi World War, Konohagakure has been enjoying a period of peace, prosperity, and extraordinary technological advancement. This is all due to the efforts of the Allied Shinobi Forces and the village's Seventh Hokage, Naruto Uzumaki. Now resembling a modern metropolis, Konohagakure has changed, particularly the life of a shinobi. Under the watchful eye of Naruto and his old comrades, a new generation of shinobi has stepped up to learn the ways of the ninja. Boruto Uzumaki is often the center of attention as the son of the Seventh Hokage. Despite having inherited Naruto's boisterous and stubborn demeanor, Boruto is considered a prodigy and is able to unleash his potential with the help of supportive friends and family. Unfortunately, this has only worsened his arrogance and his desire to surpass Naruto which, along with his father's busy lifestyle, has strained their relationship. However, a sinister force brewing within the village may threaten Boruto's carefree life.",
            "genres" => ['Action', 'Comedy', 'Fantasy'],
            "studio" => "Studio Pierrot",
        ],
        4 => [
            "id" => 4,
            "name" => "Demon Slayer",
            "imgUrl" => "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
            "description" => "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night. When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.",
            "genres" => ['Action', 'Comedy', 'Fantasy'],
            "studio" => "Ufotable",
        ],
        5 => [
            "id" => 5,
            "name" => "Jujutsu Kaisen",
            "imgUrl" => "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
            "description" => "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, 'the King of Curses'. Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.",
            "genres" => ['Action', 'Supernatural'],
            "studio" => "Yokohama Animation Lab",
        ]
    ];

    return $details[$id];
}
