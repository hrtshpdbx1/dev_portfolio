// components/ProjectCard.jsx

import Link from "next/link";
import Image from "next/image";

/**
 * Carte de projet pour la section "Projets sélectionnés" de la page d'accueil.
 *
 * @param {string} href - Chemin vers la page de détail du projet.
 * @param {object} image - Import statique d'image Next.js.
 * @param {string} title - Titre du projet (overlay au survol + alt).
 * @param {string} [badge] - Optionnel. Étiquette de version (ex: "V1", "V2").
 */
export default function ProjectCard({ href, image, title }) {
    return (
        <div className="projet_elem">
            <Link href={href}>
                <div className="media-container">

                    

                    <Image
                        src={image}
                        width={500}
                        height={500}
                        alt={`Capture d'écran de ${title}`}
                    />

                    <div className="overlay-layer">
                        <span className="overlay-text">{title}</span>
                    </div>

                </div>
            </Link>
        </div>
    );
}