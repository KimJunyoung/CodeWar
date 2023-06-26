/*
DNAStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is") 
*/

function DNAStrand(dna){
    let newArray = dna.split('').map(function(val,i,arr){
        if(val == 'A'){
            return 'T'
        } else if(val == 'T'){
            return 'A'
        } else if(val == 'G'){
            return 'C'
        } else if(val == 'C'){
            return 'G'
        }
    }
    )


    return newArray.join('')
  }


  DNAStrand("AAAA")
  DNAStrand("ATTGC")
  DNAStrand("GTAT")