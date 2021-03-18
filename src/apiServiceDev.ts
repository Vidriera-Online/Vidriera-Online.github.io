import StoreType from "./types/Store"

type Respuesta<ContentType> = {
    status: number,
    message : string,
    content : ContentType
}

const locales : Array<StoreType> = [
    {
        id: 0,
        name: 'Nike Store Argentina',
        place: 'acazuso 240',
        socialLinks: {
            instagram: 'NikeStore',
            whatsapp: '+5491100000000',
            facebook: ''
        },
        logo: 'https://img.flaticon.com/icons/png/512/732/732084.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'
    },
    {
        id: 1,
        name: 'Adidas Argentina',
        place: 'azopardo 1033',
        socialLinks: {
            instagram: 'AdidasArgentina',
            whatsapp: '+5491100000000',
            facebook: 'face'
        },
        logo: 'https://img.icons8.com/ios-filled/344/adidas-trefoil.png'
    },
    {
        id: 2,
        name: 'Gucci',
        place: 'medrano 10',
        socialLinks: {
            instagram: 'GucciArgentina',
            whatsapp: '+5491100000000',
            facebook: 'face'
        },
        logo: 'https://img.icons8.com/color/344/gucci.png'
    },
    {
        id: 3,
        name: 'De todo juegos',
        place: 'avellaneda 159',
        socialLinks: {
            instagram: 'DeTodoJuegos',
            whatsapp: '+5491100000000',
            facebook: 'face'
        },
        logo: 'https://img.icons8.com/color/344/battle-net.png'
    },
    {
        id: 4,
        name: 'Agarrate catalina',
        place: 'avellaneda 350',
        socialLinks: {
            instagram: 'AgarrateCatalina.OK',
            whatsapp: '+5491100000000',
            facebook: 'face'
        },
        logo: 'https://img.icons8.com/color/344/ccbluex.png'
    },
    {
        id: 5,
        name: 'Vestite Bien',
        place: 'avellaneda 523',
        socialLinks: {
            instagram: 'VestiteBien.OK',
            whatsapp: '+5491100000000',
            facebook: 'face'
        },
        logo: 'https://img.icons8.com/color/344/playerme.png'
    },
]

export const getStores = async (page = 0, pageSize = 10) : Promise<Respuesta<Array<StoreType>>> =>
    await {
        status: 200,
        content: locales,
        message: 'Locales'
    }

export const getStore = async (id : number) => {
    if(!id) throw new Error("Hace falta un ID para obtener el local")
    const el = locales.find(e => e.id === id)
    return await {
        status: el ? 200 : 404,
        content: el,
        message: el ? `Local con ID ${id}` : `No se encontro local con el ID ${id}`
    }
}