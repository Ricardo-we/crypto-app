import { APIURL } from'../App'

export default function searchData(search, allData){
    let similarityCount = 0;
    let moreSimilarCount = 0;
    let moreSimilar;
    let similars = [];

    for (let data of allData){
        if(search === data) return data;
        for(let i in search){
            if(search.charAt(i) === data.charAt(i)){
                similarityCount += 1
            }
            if(similarityCount > moreSimilarCount){
                moreSimilar = data;
                similars.push(moreSimilar)
                moreSimilarCount = similarityCount;
            }
        }
        similarityCount = 0;
    }
    return moreSimilar, similars;
}

export async function getAllCryptos(){
    const response = await fetch(APIURL);
    const cryptosData = await response.json();
    return await cryptosData;
}

export function searchSimilars(search, allData){
    const minimumSimilarity = 2;
    const similarItems = [];

    for(let data of allData){
        let similarityCount = 0;

        for(let i in data){
            if (search.length > data.length) break
            if(search.charAt(i) === data.charAt(i)){
                similarityCount += 1
            }
        }
        if(similarityCount >= minimumSimilarity){
            similarItems.push(data)
        }
    }
    return similarItems
}