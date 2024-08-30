import ThreeCatsItem from "./ThreeCatsItem";
import '../../styles/home/threeCategories.css';


const thumbs1 = ['http://http2.mlstatic.com/D_668683-MLA48680079527_122021-I.jpg', 
                'http://http2.mlstatic.com/D_600230-MLU72273908364_102023-I.jpg', 
                'http://http2.mlstatic.com/D_677335-MLU70064904527_062023-I.jpg', 
                'http://http2.mlstatic.com/D_812908-MLU77379578912_072024-I.jpg']

const thumbs2 = ['http://http2.mlstatic.com/D_698517-MLU75127662773_032024-I.jpg', 
                'http://http2.mlstatic.com/D_867341-MLU73183906384_122023-I.jpg', 
                'http://http2.mlstatic.com/D_625082-MLU71821850722_092023-I.jpg', 
                'http://http2.mlstatic.com/D_739744-MLA48401365441_122021-I.jpg']

const thumbs3 = ['http://http2.mlstatic.com/D_921195-MLA74420606310_022024-I.jpg',
                'http://http2.mlstatic.com/D_899598-MLU74196945219_012024-I.jpg', 
                'http://http2.mlstatic.com/D_719454-MLA75143914516_032024-I.jpg', 
                'http://http2.mlstatic.com/D_810466-MLA75004334351_032024-I.jpg']

const ThreeCategories = () => {
    return (
        <>
            <div className="three-categories-wrapper">
                <ThreeCatsItem 
                    link={"https://http2.mlstatic.com/D_NQ_614708-MLA78141159215_082024-OO.webp"}
                    title={"BELLEZA"}
                    thumbs={thumbs1}
                />

                <ThreeCatsItem 
                    link={"https://http2.mlstatic.com/D_NQ_739738-MLA78293096963_082024-OO.webp"}
                    title={"MUNDO BEBÉS"}
                    thumbs={thumbs2}
                />

                <ThreeCatsItem 
                    link={"https://http2.mlstatic.com/D_NQ_933979-MLA78141206275_082024-OO.webp"}
                    title={"CELULARES"}
                    thumbs={thumbs3}
                />
            </div>
        </>
    );
}
 
export default ThreeCategories;