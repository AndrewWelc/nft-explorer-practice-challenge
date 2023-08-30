import axios from 'axios';

const BASE_URL = 'https://api-mainnet.magiceden.io/idxv2';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

export const fetchNFTs = async (offset: number = 0, limit: number = 20) => {
    const params: any = {
        collectionSymbol: 'okay_bears',
        limit,
        offset
    };

    for (let i = 0; i <= MAX_RETRIES; i++) {
        try {
            const { data } = await axios.get(`${BASE_URL}/getListedNftsByCollectionSymbol`, {
                params
            });
            return data.results;
        } catch (error) {
            if (i === MAX_RETRIES) throw error;
            await new Promise(res => setTimeout(res, RETRY_DELAY * Math.pow(2, i)));
        }
    }
};
