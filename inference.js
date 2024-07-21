


var quotes=[
  'Savitri Bai Phule: Illiterate till marriage, upon receiving training, she is known to be the first female teacher and headmistress of India.',
  'Kadambini Bose Ganguli- Despite coming from a caste in Bengal that did not support the education of women, she was the first Indian woman to practice medicine and one of the first who practiced with a degree in modern medicine.',
  'J.C. Bose- A pioneer in the investigation of radio microwave optics, Bose also contributed to botany as he invented the crescograph, a device for measuring the growth of plants. A crater on the Moon was named in his honour. He is well known for his research on the nervous mechanism of plants.',
  'Asima Chatterjee- The first woman to receive a doctorate of science from an Indian University, Asima developed anti-epileptic, anti-convulsive, and chemotherapy drugs to treat patients. The anti-epileptic drug which she developed from Marsilia minuta is her most successful work and till date, it is used commercially.',
  'Sarojini Naidu- Known as The Nightingale of India, Sarojini Naidu passed her school leaving exams at the age of 12 and earned the highest rank. She was the second female President of the Indian National Congress and heavily promoted Indian Independence, the rights and education of women.',
  'Irene Uchida- a geneticist and Down syndrome researcher who introduced cytogenetics and the study of chromosomes and heredity.She helped identify the link between pregnant women who had undergone abdominal X-rays and chromosomal birth defects such as Down syndrome in subsequent pregnancies. She and her family were among 22,000 Japanese Canadians sent to the Lemon Creek internment camp during World War II, where she opened and operated a school for interned children within the camp until the war ended.',
  'Bibha Chowdhuri- The first Indian woman to earn a Ph.D. in physics, Bibha demonstrated that the density of penetrating events is proportional to the total particle density of an extensive air shower. With particle accelerators not yet available, Chowdhuri went to the tops of mountains to study subatomic particles in cosmic rays using cloud chambers during which time she observed a new particle: mesons. Due to World War II, she was not able to get the emulsion plates required to continue her research. Cecil Frank Powell replicated their experiment seven years later with the necessary technology, earning him the Nobel Prize.',
  'Tak Wah Mak- Medical researcher, oncologist, and biochemist whose discoveries in multiple fields have greatly impacted public health around the world, Tak Wah Mak uncovered new findings around the structure of the T cell receptor for antigens, an essential component of modern immunology. He discovered that the T cell receptor for antigens was similar in design to antibodies, yet different in genetic origin and sequence. Prior to his discovery, the nature of the receptor was unknown.',
  'David Ho- The Taiwanese-American researcher who invented a combination antiretroviral therapy method that dramatically increased survival rates against HIV/AIDS. The method followed the development of his strategy utilizing protease inhibitors and reverse transcriptase inhibitors for patients in the virus’s early stages.',
  'Edgardo Dizon Gomez- A Phillipino scientist, Gomez devoted his life to fighting to conserve marine resources in the Philippines, especially the coral reefs. He led the initiative of replanting corals. He pioneered the study on ocean acidification caused by increased levels of absorbed carbon dioxide in the ocean.',
  'Anna Mani- Born in Kerala, India and one of the most important researches in meteorology, Anna Mani constructed the ozonesonde—an instrument that could measure atmospheric ozone levels in order to understand how climate change affects our planet.',
  'Lin Lanying- Best known for her contributions to optoelectronics and microelectronics, she invented the first monocrystalline silicon in China, built the first furnace to extract silicon metal and created a method to integrate circuits using only one chip per piece of equipment. Called the Mother of Semiconductor Electronics, she made significant research in the study of semiconductors, which led to the creation of many useful products like flat panel displays, mobile phones, etc.',
  'Syed Qasim Mehdi- A Pakistani molecular biologist who worked in the field of population genetics, Mehdi was one of the original members of the Human Genome Diversity Project',
  'Mohammed Abdus Salam- Salam is known for his work on the electric weak force and the Grand Unified Theory (which explained why particles have mass and the interaction of fundamental forces). He explained how light can be polarised and was the first Muslim to receive a Nobel Prize in the sciences.'
]

min=0
max=quotes.length
Math.floor(Math.random() * (max -  + 1)) + min;
var randomNumber = Math.floor(Math.random()*quotes.length);
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}