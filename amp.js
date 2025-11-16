define(['pipAPI', 'https://cp0131ks.github.io/study4_2/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			
			
			{
				nameForFeedback : 'A1',  //Will be used in the user feedback 
				nameForLogging : 'A1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				       {word : 'A型'}				
                  
				]

			}, 
			{
				nameForFeedback : 'A2',  //Will be used in the user feedback 
				nameForLogging : 'A2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				       {word : 'A型　真面目'}				
                  
				]

			}, 
			{
				nameForFeedback : 'A3',  //Will be used in the user feedback 
				nameForLogging : 'A3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'A型　努力家'}

				]

			}, 
			{
				nameForFeedback : 'O1',  //Will be used in the user feedback 
				nameForLogging : 'O1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'O型'}					
                  
				]

			}, 
			{
				nameForFeedback : 'O2',  //Will be used in the user feedback 
				nameForLogging : 'O2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'O型　社交的'}					
                  
				]

			}, 
			{
				nameForFeedback : 'O3',  //Will be used in the user feedback 
				nameForLogging : 'O3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'O型　穏やか'}					
                  
				]

			}, 
			{
				nameForFeedback : 'B1',  //Will be used in the user feedback 
				nameForLogging : 'B1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'B型'}					
                  
				]

			},
			{
				nameForFeedback : 'B2',  //Will be used in the user feedback 
				nameForLogging : 'B2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'B型　マイペース'}					
                  
				]

			},  
			{
				nameForFeedback : 'B3',  //Will be used in the user feedback 
				nameForLogging : 'B3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'B型　個性的'}
				]
			},
			
			{
				nameForFeedback : 'AB1',  //Will be used in the user feedback 
				nameForLogging : 'AB1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'AB型'}
				]
			},
			{
				nameForFeedback : 'AB2',  //Will be used in the user feedback 
				nameForLogging : 'AB2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'AB型　天才肌'}
				]
			},
			{
				nameForFeedback : 'AB3',  //Will be used in the user feedback 
				nameForLogging : 'AB3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'AB型　不思議ちゃん'}
				]
			},
			
			{
				nameForFeedback : 'Neutral_1',  //Will be used in the user feedback 
				nameForLogging : 'Neutral_1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'こたつ　暖房器具'}
				]
			},
			{
				nameForFeedback : 'Neutral_2',  //Will be used in the user feedback 
				nameForLogging : 'Neutral_2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [ 
					{word : '消しゴム　文房具'}
				]
			},
			{
				nameForFeedback : 'Neutral_3',  //Will be used in the user feedback 
				nameForLogging : 'Neutral_3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '車　移動手段'}
				]
			},
			
		
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{word : '雨　傘'}, {word : 'ランプ  光'}, {word : 'イス  机'}]
		},
		targetCats :  [
			{
				nameForFeedback : 'イ音節文字',  //Will be used in the user feedback 
				nameForLogging : 'イ音節文字', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				     {word : 'ꂊ'},
				    {word : 'ꃞ'},
				    {word : 'ꄅ'},
				    {word : 'ꈁ'},
				    {word : 'ꉭ'},
				    {word : 'ꌵ'},
				    {word : 'ꍯ'},
				    {word : 'ꎓ'},
				    {word : 'ꏤ'},
				    {word : 'ꏸ'},
				    {word : 'ꐎ'},
				    {word : 'ꐧ'},
				    {word : 'ꄰ'},
				    {word : 'ꅄ'},
				    {word : 'ꈭ'},
				    {word : 'ꈲ'},
				    {word : 'ꋖ'},
				    {word : 'ꍡ'},
				    {word : 'ꍤ'},
				    {word : 'ꍭ'},
				    {word : 'ꎨ'},
				    {word : 'ꎰ'},
				    {word : 'ꏲ'},
				    {word : 'ꐬ'},
				    {word : 'ꐸ'},
				    {word : 'ꀅ'},
				    {word : 'ꑿ'},
				    {word : 'ꀱ'},
				    {word : 'ꂅ'},
				    {word : 'ꂨ'},
				    {word : 'ꃡ'},
				    {word : 'ꃢ'},
				    {word : 'ꄩ'},
				    {word : 'ꄸ'},
				    {word : 'ꅫ'},
				    {word : 'ꆏ'},
				    {word : 'ꇜ'},
				    {word : 'ꇢ'},
				    {word : 'ꇿ'},
				    {word : 'ꈍ'},
				    {word : 'ꈥ'},
				    {word : 'ꉐ'},
				    {word : 'ꊲ'},
				    {word : 'ꊼ'},
				    {word : 'ꌕ'},
				    {word : 'ꌙ'},
				    {word : 'ꍣ'},
				    {word : 'ꎍ'},
				    {word : 'ꎖ'},
				    {word : 'ꐀ'},
				    {word : 'ꐃ'},
				    {word : 'ꀡ'},
				    {word : 'ꀇ'},
				    {word : 'ꁈ'},
				    {word : 'ꁌ'},
				    {word : 'ꂛ'},
				    {word : 'ꃀ'},
				    {word : 'ꃤ'},
				    {word : 'ꅲ'},
				    {word : 'ꈵ'},
				    {word : 'ꉘ'},
				    {word : 'ꉜ'},
				    {word : 'ꉠ'},
				    {word : 'ꊥ'},
				    {word : 'ꌅ'},
				    {word : 'ꌝ'},
				    {word : 'ꍉ'},
				    {word : 'ꏃ'},
				    {word : 'ꏓ'},
				    {word : 'ꏙ'},
				    {word : 'ꏚ'},
				    {word : 'ꏵ'},
				    {word : 'ꐰ'},
				    {word : 'ꑗ'},
				    {word : 'ꑷ'},
				    {word : 'ꒁ'},
				    {word : 'ꀹ'},
				    {word : 'ꀾ'},
				    {word : 'ꁕ'},
				    {word : 'ꀀ'},
				    {word : 'ꀈ'},
				    {word : 'ꀒ'},
				    {word : 'ꀽ'},
				    {word : 'ꃆ'},
				    {word : 'ꃛ'},
				    {word : 'ꄉ'},
				    {word : 'ꄌ'},
				    {word : 'ꆹ'},
				    {word : 'ꆾ'},
				    {word : 'ꇡ'},
				    {word : 'ꇱ'},
				    {word : 'ꈑ'},
				    {word : 'ꉬ'},
				    {word : 'ꉱ'},
				    {word : 'ꊈ'},
				    {word : 'ꊿ'},
				    {word : 'ꋄ'},
				    {word : 'ꋩ'},
				    {word : 'ꍕ'},
				    {word : 'ꎎ'},
				    {word : 'ꎙ'},
				    {word : 'ꎮ'},
				    {word : 'ꏋ'},
				    {word : 'ꏗ'},
				    {word : 'ꐞ'},
				    {word : 'ꐥ'},
				    {word : 'ꎆ'},
				    {word : 'ꒇ'},
				    {word : 'ꀵ'},
				    {word : 'ꁄ'},
				    {word : 'ꁜ'},
				    {word : 'ꁮ'},

                  
				]

			}

		
		],

		base_url : {//Where are your images at?
			image : 'https://cp0131ks.github.io/study4_1/image'
		}
	});
});