import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


function NewsCard({ article }: NewsCardProps) {
    // PART 2: Create a reusable news card to use with general stories

    // Similar to Part 1, create a component that displays:
    // 1. The article's image
    // 2. The article's title,
    // 3. A truncated version of the article's body

    // This component should be reusable to populate all stories on the news page.

    // Once completing this part, you should be able to see a few test articles on
    // the right side of the screen.

    // Hint: Some classes in `globals.css` could help with styling

    return (
        <div className="news-card">
            <div className="news-info">
                <h1 className="story-title">{article.title}</h1>
                <div className="news-summary">
                    <p className="story-summary">{article.body}</p>
                </div>
            </div>
            <div className="news-img-div">
                <img src={article.image_url} className="news-img" />
            </div>
        </div>
    );
}

export default NewsCard;
