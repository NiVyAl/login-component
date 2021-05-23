

class ArticleStatus {
    constructor(response) {
        Object.freeze(this.ArticleStatusEnum);

    }

    static ArticleStatusEnum = {Verified:1, Rejected:2, Process:3};
    

}

export default ArticleStatus