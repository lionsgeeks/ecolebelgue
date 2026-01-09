import AppLayout from '@/layouts/app-layout';
import Banner from '@/components/banner';
import ContactSchools from './partials/contact-schools';

export default function Contact() {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <Banner
                    title="Contactez-nous"
                    description="Connectez-vous avec nos établissements à Casablanca et Rabat. Nous sommes là pour répondre à toutes vos questions."
                    buttonText="En savoir plus"
                    buttonLink="/faq"
                />
                <ContactSchools />
            </div>
        </AppLayout>
    );
}
