const { json } = require("express/lib/response");

class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }
 
    search(){
        var keyword = this.queryStr.keyword ? {
            name:{
                $regex:this.queryStr.keyword,
                $options:"i"
            }
        } : {}
        console.log(keyword)

        if(this.queryStr.genre)  {keyword.genre = {
            $regex:this.queryStr.genre,
            $options:"i"
        }}
        console.log(keyword)
        this.query = this.query.find({...keyword})
        return this;
    }

}

module.exports = ApiFeatures ;