// app/social-script-v2/page.jsx
// 
"use client"
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/project-detail.css';
import Footer from '@/components/Footer';
import CtaProject from '@/components/CtaProject';

export default function SocialScript() {

    return (
        <div className="projectPageWrapper bbbreadme">

            <main id="main-content" className="projectPage">

                {/* --- HEADER --- */}
                <header className="projectHero">
                    <h1>Social Script</h1>

                    <div className="projectMeta">
                        <div className="metaContainerLeft">
                            <div className="metaItem">
                                <strong>Type</strong>
                                <ul><li>Projet de fin de formation</li></ul>
                            </div>
                            <div className="metaItem">
                                <strong>Rôle</strong>
                                <ul>
                                    <li>Développement</li>
                                    <li>Design</li>
                                    <li>Rédaction</li>
                                </ul>
                            </div>
                            <div className="metaItem">
                                <strong>Tech</strong>
                                <ul>
                                    <li>Node.js, Express, MongoDB, JWT</li>
                                    <li>React, Vite, Tailwind CSS</li>
                                    <li>Argon2, Yup, Jotai</li>
                                </ul>
                            </div>
                        </div>
                        <div className="metaContainerRight">
                            <div className="metaItem">
                                <a href="https://github.com/hrtshpdbx1/socialscript-v2-client" target="_blank" rel="noopener noreferrer" className="btn">
                                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} /> Code Front
                                </a>
                            </div>
                            <div className="metaItem">
                                <a href="https://github.com/hrtshpdbx1/social-script-v2-api" target="_blank" rel="noopener noreferrer" className="btn">
                                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} /> Code API
                                </a>
                            </div>
                            <div className="metaItem">
                                <a href="https://socialscript-v2.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">
                                    <FontAwesomeIcon icon={faRocket} style={{ marginRight: '8px' }} /> Démo
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- BANDEAU DE LIAISON VERS LA V1 --- */}
                <aside className="projectVersionBanner" aria-label="Lien vers une version antérieure du projet">
                    <FontAwesomeIcon icon={faInfoCircle} aria-hidden="true" />
                    <p>
                        Ce projet existe aussi dans une version vanilla : <Link href="/social-script-v1">Social Script V1</Link>, le prototype HTML/CSS/JS.
                    </p>
                </aside>

                {/* --- TAGLINE + MOCKUP --- */}
                <section className="projectSection">
                    <p className="projectTagline">
                        SocialScript est un simulateur pour s&apos;entraîner à décoder les codes sociaux implicites,
                        dans un cadre structuré et bienveillant, pensé en particulier pour les personnes qui les
                        déchiffrent mal au quotidien. Cette V2 est la refonte fullstack d&apos;un premier prototype
                        développé en JavaScript vanilla : une API sécurisée et architecturée en couches côté serveur,
                        une interface React soignée côté client, avec un fil conducteur constant, ne jamais sacrifier
                        l&apos;accessibilité ni le confort d&apos;usage.
                    </p>
                    <figure className="imagePlaceholder no-decor">
                        <Image
                            src="/img/screenshots/MockupHomepage.png"
                            alt="Mock-up de la page d'accueil de SocialScript en versions desktop et mobile"
                            width={800}
                            height={450}
                        />
                    </figure>
                </section>

                {/* --- OBJECTIF DU PROJET --- */}
                <section className="projectSection">
                    <div className="objectif-section">
                        <h2>Objectif du projet</h2>
                        <p>
                            L&apos;objectif de SocialScript est d&apos;offrir aux personnes neuro-atypiques un espace
                            pour expérimenter des situations sociales, analyser les réponses possibles et progresser,
                            sans crainte du faux pas. La contrainte centrale du projet n&apos;est donc pas seulement
                            technique, elle est aussi humaine : tout, de l&apos;architecture à l&apos;interface, doit
                            servir un environnement structuré, lisible et bienveillant.
                        </p>

                        <h3>Ce que la plateforme permet :</h3>
                        <ul className="projectList">
                            <li><strong>S&apos;entraîner par la mise en situation :</strong> des scénarios jouables organisés par niveau de difficulté et par thème du quotidien, avec un feedback pédagogique à chaque choix.</li>
                            <li><strong>Contribuer à la plateforme :</strong> les membres connectés peuvent proposer leurs propres scénarios et thèmes.</li>
                            <li><strong>Une communauté modérée :</strong> tout contenu proposé passe par une validation avant publication, et peut être signalé.</li>
                            <li><strong>Des rôles distincts :</strong> utilisateurs, modérateurs et administrateurs, chacun avec ses permissions.</li>
                        </ul>
                    </div>
                </section>

                {/* --- ARCHITECTURE FULLSTACK --- */}
                <section className="projectSection">
                    <div className="project-technique">
                        <h2>L&apos;architecture fullstack</h2>

                        {/* Sous-partie : API en couches */}
                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Une API structurée en couches</h3>
                                </div>
                                <p>
                                    L&apos;API REST, construite avec Node.js et Express, est organisée en couches aux
                                    responsabilités séparées : les routes reçoivent la requête, les contrôleurs orchestrent,
                                    les services portent la logique métier, les modèles parlent à la base, et les middlewares
                                    interceptent en amont (authentification, validation, gestion d&apos;erreurs).
                                </p>
                            </div>

                            <figure className="imagePlaceholder diagram-compact">
                                <Image
                                    src="/img/ArchitectureAPI.png"
                                    alt="Schéma du trajet d'une requête à travers les couches de l'API"
                                    width={500}
                                    height={412}
                                />
                                <figcaption>Le trajet d&apos;une requête à travers les couches de l&apos;API.</figcaption>
                            </figure>

                            <div className="codeConcept">
                                <span className="codeComment">// Une route protégée enchaîne ses middlewares avant le contrôleur</span> <br /><br />
                                <code>
                                    <span className="lila">scenarioRouter</span>.<span className="vert">route</span><span className="orange">(</span><span className="yellow">&apos;/&apos;</span><span className="orange">)</span><br />
                                    &nbsp;&nbsp;.<span className="vert">post</span><span className="orange">(</span><span className="lila">requireAuth</span>, <span className="vert">scenarioValidation</span><span className="orange">(</span><span className="lila">scenarioValidator</span><span className="orange">)</span>, <span className="lila">scenarioController</span>.<span className="vert">insert</span><span className="orange">)</span>;
                                </code>
                            </div>

                            <div className="benefit-box">
                                <p>
                                    Chaque couche a une seule raison de changer, ce qui rend le code testable et
                                    permet à la base de grandir sans devenir ingérable. Cette même rigueur se retrouve
                                    côté client.
                                </p>
                            </div>
                        </div>

                        {/* Sous-partie : Authentification */}
                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Une authentification sécurisée</h3>
                                </div>
                                <p>
                                    L&apos;authentification repose sur des tokens JWT : le serveur reste <em>stateless</em>,
                                    c&apos;est le client qui présente son token à chaque requête protégée. Les mots de
                                    passe ne sont jamais stockés en clair, ils sont hachés avec Argon2.
                                </p>
                            </div>
                        </div>

                        {/* Sous-partie : Rôles */}
                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Trois rôles, des permissions distinctes</h3>
                                </div>
                                <p>
                                    La plateforme distingue trois rôles : utilisateur, modérateur et administrateur. Chaque
                                    route de l&apos;API est protégée au bon niveau via des middlewares dédiés, ce qui permet
                                    par exemple à un modérateur de valider un scénario sans avoir accès aux actions réservées
                                    à l&apos;administration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SEPARATION DES RESPONSABILITES COTE FRONT --- */}
                <section className="projectSection">
                    <div className="project-technique">
                        <h2>La séparation des responsabilités côté front</h2>

                        {/* Sous-partie : Couche service */}
                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Une couche service qui isole les appels à l&apos;API</h3>
                                </div>
                                <p>
                                    Tous les appels à l&apos;API passent par une couche de services dédiée, et non
                                    directement depuis les composants. Une instance Axios unique centralise la configuration,
                                    avec une URL de base qui bascule entre l&apos;environnement local et la production.
                                    Des fichiers de service organisés par domaine (authentification, scénarios, thèmes)
                                    exposent ensuite des fonctions simples au reste de l&apos;application. Si l&apos;API
                                    change, je corrige un seul fichier, pas chaque composant.
                                </p>
                            </div>
                        </div>

                        {/* Sous-partie : Composant orchestrateur */}
                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Un composant qui orchestre le parcours</h3>
                                </div>
                                <p>
                                    Le parcours d&apos;entraînement se fait en plusieurs étapes : choix de la difficulté,
                                    du thème, du scénario, puis le jeu lui-même. J&apos;ai concentré cette logique dans
                                    un composant chef d&apos;orchestre, qui sait à quelle étape on se trouve, déduit le
                                    mode en cours à partir de l&apos;URL, construit le fil d&apos;Ariane, gère le retour
                                    en arrière, et passe le relais au bon composant-enfant. Les enfants restent simples,
                                    toute la complexité du parcours est rassemblée à un seul endroit identifiable.
                                </p>
                            </div>
                        </div>

                        {/* Sous-partie : Jotai hors React */}
                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Lire l&apos;authentification en dehors de React</h3>
                                </div>
                                <p>
                                    Un fichier de service n&apos;étant pas un composant, il n&apos;a pas accès aux hooks
                                    React. Or, pour appeler une route protégée, le service doit récupérer le token de
                                    l&apos;utilisateur connecté. La solution consiste à consulter directement le store
                                    de gestion d&apos;état en dehors de l&apos;arbre React, au moment où le service en
                                    a besoin.
                                </p>
                            </div>

                            <div className="codeConcept">
                                <span className="codeComment">// Lecture du token Jotai depuis un fichier de service</span> <br /><br />
                                <code>
                                    <span className="rose">const</span> <span className="lila">token</span> <span className="rose">=</span> <span className="vert">getDefaultStore</span><span className="orange">()</span>.<span className="vert">get</span><span className="orange">(</span><span className="lila">tokenAtom</span><span className="orange">)</span>;
                                </code>
                            </div>

                            <div className="benefit-box">
                                <p>
                                    Cette approche évite de faire transiter le token manuellement à travers les composants,
                                    et préserve la couche service de toute dépendance à React.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- UX AU SERVICE DE LA MISSION --- */}
                <section className="projectSection">
                    <div className="project-technique">
                        <h2>L&apos;UX au service de la mission</h2>

                        {/* Sous-partie : Modération */}
                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>La modération, une brique centrale</h3>
                                </div>
                                <p>
                                    Une plateforme contributive qui se veut bienveillante ne peut pas publier les contenus
                                    à l&apos;aveugle. Tout scénario ou thème proposé arrive avec un statut « en attente »
                                    et n&apos;est visible qu&apos;après validation. La communauté peut signaler un contenu
                                    problématique, et les modérateurs disposent de routes dédiées pour traiter ces
                                    signalements. Ce choix se lit jusque dans la base, où le statut de publication est
                                    une donnée à part entière.
                                </p>
                            </div>
                        </div>

                        {/* Sous-partie : Charge cognitive */}
                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Réduire la charge cognitive</h3>
                                </div>
                                <p>
                                    Pour le public visé, une interface imprévisible est un obstacle. Dans les scénarios
                                    joués, l&apos;interlocuteur « réfléchit » visiblement avant de répondre, avec un
                                    indicateur de saisie. Après chaque choix, la vue se repositionne automatiquement
                                    pour que l&apos;utilisateur ne perde jamais le fil. Les éléments apparaissent
                                    progressivement, sans surgir. Ces comportements ne sont pas cosmétiques, ils
                                    réduisent la fatigue attentionnelle.
                                </p>
                            </div>

                            <figure className="imagePlaceholder">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    controls
                                >
                                    <source src="/img/screenshots/capturevideochat.mp4" type="video/mp4" />
                                </video>
                                <figcaption>Démonstration du rythme d&apos;échange dans un scénario joué.</figcaption>
                            </figure>
                        </div>

                        {/* Sous-partie : Accessibilité */}
                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Une accessibilité intégrée, pas ajoutée</h3>
                                </div>
                                <p>
                                    L&apos;accessibilité n&apos;a pas été une passe finale. La zone de conversation
                                    est annoncée aux lecteurs d&apos;écran, qui signalent l&apos;arrivée de chaque
                                    nouveau message. La navigation au clavier est gérée partout, avec un état de focus
                                    toujours visible. Les choix de l&apos;utilisateur communiquent leur état aux
                                    technologies d&apos;assistance. Pour les personnes sensibles au mouvement, les
                                    animations se désactivent si le système le demande.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- LECONS APPRISES --- */}
                <section className="projectSection">
                    <div className="objectif-section">
                        <h2>Ce que ce projet m&apos;a appris</h2>
                        <p>
                            SocialScript est le projet où je suis passée d&apos;un prototype fonctionnel à une
                            application pensée pour durer.
                        </p>

                        <ul className="projectList">
                            <li>
                                <strong>Architecturer avant de coder.</strong> Découper une API en couches demande de
                                réfléchir à la structure avant d&apos;écrire la première ligne. J&apos;y ai gagné un
                                code où je sais toujours où va quoi.
                            </li>
                            <li>
                                <strong>La sécurité est une suite de décisions.</strong> Choisir Argon2, garder une
                                API stateless, protéger chaque route au bon niveau : autant de choix que je peux
                                désormais expliquer et défendre.
                            </li>
                            <li>
                                <strong>La cohérence entre le front et le back.</strong> Retrouver côté client la même
                                logique de séparation que côté serveur, ce n&apos;est pas un hasard, c&apos;est une
                                discipline.
                            </li>
                            <li>
                                <strong>Tenir l&apos;accessibilité dans un projet complexe.</strong> Le rester sur
                                une application dynamique, avec du contenu qui change et un état qui évolue, demande
                                de l&apos;anticipation.
                            </li>
                        </ul>

                        <p>
                            Le projet n&apos;est pas figé pour autant : certaines routes d&apos;administration sont
                            encore à compléter, et je les documente ouvertement.
                        </p>
                    </div>
                </section>

                <CtaProject />
            </main>

            <Footer />
        </div>
    );
}