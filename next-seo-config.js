const title =
    'Students Who Code';
const description = 'Computer science and coding courses are created by students for students, all for free with no accounts.';

const SEO = {
    title,
    description,
    canonical: 'https://studentswhocode.org/',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://studentswhocode.org/',
        title,
        description,
        images: [
            {
                url: 'https://studentswhocode.org/Logo1.png',
                alt: title
            }
        ]
    }
};

export default SEO;