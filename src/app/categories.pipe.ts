// import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({
//   name: 'filter'
// })
// export class CategoriesPipe implements PipeTransform {


//      transform(alladds: any, term?: any): any {

   

//    if(term=== undefined) return alladds;
//    return alladds.filter(function(adv){
//        return adv.ad_cat.toLowerCase().includes(term.toLowerCase());
//    })
//  }

// }






import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class CategoriesPipe implements PipeTransform {


	transform(alladds: any, term?: any, condition?:any): any {

		

		if(term=== undefined && condition === undefined) return alladds;

		if(term === undefined && condition ){
			return alladds.filter(function(adv){
				return  adv['ad_loc'].toLowerCase().includes(condition.toLowerCase());
			})

		}

		if(condition === undefined && term ){
			return alladds.filter(function(adv){
				return  adv['ad_cat'].toLowerCase().includes(term.toLowerCase());
			})

		}
		if(term === "All") {

			return alladds.filter(function(adv){
				return  adv['ad_loc'].toLowerCase().includes(condition.toLowerCase());
			})
		}else{ if(condition === "All"){

			return alladds.filter(function(adv){
				return  adv['ad_cat'].toLowerCase().includes(term.toLowerCase());
			})
		}
	}
   return alladds.filter(function(adv){

   	console.log(alladds,adv)
       return adv['ad_cat'].toLowerCase().includes(term.toLowerCase()) && adv['ad_loc'].toLowerCase().includes(condition.toLowerCase());
   })
 }

}