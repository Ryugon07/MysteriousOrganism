// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
return {
  specimenNum,
  dna,
  mutate() {
  let randomIndex = Math.floor(Math.random() * this.dna.length)
  this.dna[randomIndex]
  let mBase = returnRandBase();
  while (this.dna[randomIndex] === mBase) {
   mBase = returnRandBase();
  }
  this.dna[randomIndex] = mBase;
  return this.dna;
  },
  compareDNA(pObject) {
    let similarCount = 0
    let totalCount = this.dna.length
    for (let i = 0; i < pObject.dna.length; i++) {
        if (pObject.dna[i] === this.dna[i]) {
          similarCount++
        }
      }
    console.log(similarCount)
    let sPercent = similarCount / totalCount
    let fPercent = sPercent.toFixed(2) * 100
console.log(`${this.specimenNum} and ${pObject.specimenNum} have ${fPercent}% DNA in common.`);

  },
  willLikelySurvive() {
    let cCount = 0
    let gCount = 0
    for (let i = 0; i < this.dna.length; i++) {
      if (this.dna[i] === 'C') {
        cCount++
      }
      else if (this.dna[i] === 'G') {
        gCount++
      }
    }
    
    let cSurvival = cCount / this.dna.length
    let gSurvival = gCount / this.dna.length
    if (cSurvival.toFixed(2) >= 0.6 || gSurvival.toFixed(2) >= 0.6) {
      return true
    }
    else {
      return false;
    }
  }
  }
}

//const ex1 = pAequorFactory(2, [ 'T', 'T', 'A', 'T', 'A', 'T', 'A', 'T', 'T', 'C', 'A', 'A', 'T', 'G', 'T' ])
//const ex2 = pAequorFactory(1, [ 'C', 'G', 'C', 'G', 'C', 'C', 'G', 'C', 'C', 'G', 'C', 'C', 'C', 'C', 'A' ])
//console.log(ex2.willLikelySurvive())
let pAequorInstances = []
for (let i = 1; pAequorInstances.length <= 30; i++) {
  let newpAequor = pAequorFactory(i, mockUpStrand()) 
  if (newpAequor.willLikelySurvive()) {
    pAequorInstances.push(newpAequor)
  }
  }
  console.log(pAequorInstances)