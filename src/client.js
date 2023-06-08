import { createClient } from '@sanity/client';

import imageUrlBuilder  from '@sanity/image-url'

export const client = createClient({
    projectId: 'tb636hzg',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'sksi93S7jR2iY4KuSe0urUSsFWptJ3uZmwIfzpt72w7Lvt7HFqkBrFPOFfGu0oVSGvnhtTT6rj1L5NDOgQnnFLLdMmwNmTTAwy9t2rT2yAhhCoaq7HbTGtl46VBmF9F0bFDVMOvBCwLb8Xl2GrZl2yUppM7Vshr2Sy0NKnrA1bB6NwHIjULf',
    

})


const builder = imageUrlBuilder(client)


export const urlFor = (source) => builder.image(source);



// export const client =  SanityClient({})