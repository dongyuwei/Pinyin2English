# Pinyin2English
Chinese Pinyin to English Dictionary for Mac Dictionary.app 

## Installing the dictionary
1. Download https://github.com/dongyuwei/Pinyin2English/releases/latest and unzip it
2. Copy `Pinyin2English.dictionary` to `~/Library/Dictionaries`
3. Launch Dictionary.app
4. In Dictionary > Preferences, scroll to the bottom of the list and check the *Pinyin2English* dictionary to enable it
5. Optional: drag the *Pinyin2English* dictionary entry to change the order of dictionaries

---

## Using the dictionary

Try looking up the meaning of these Pinyin as a test: `gaoji` or `ceshi` 
* Launch Dictionary and type the Pinyin into the search field

## Snapshot
![setup](https://github.com/dongyuwei/Pinyin2English/blob/master/snapshot/setup.png)
![pinyin](https://github.com/dongyuwei/Pinyin2English/blob/master/snapshot/pinyin.png)
![gaoji](https://github.com/dongyuwei/Pinyin2English/blob/master/snapshot/gaoji.png)
![binmayong](https://github.com/dongyuwei/Pinyin2English/blob/master/snapshot/binmayong.png)
![roujiamo](https://github.com/dongyuwei/Pinyin2English/blob/master/snapshot/roujiamo.png)


### Building

1. Download `Additional_Tools_for_Xcode_9.dmg` from apple.com and copy `Dictionary Development Kit` to `/DevTools/Utilities/Dictionary Development Kit`
2. Git Clone/Download this project
3. Open Terminal and cd to project directory
4. Run `make && make install` (this will build and install the dictionary)
5. In Dictionary > Preferences, scroll to the bottom of the list and activate the *Pinyin2English* dictionary (only required once)

#### References
1. [Dictionary Services Programming Guide](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/DictionaryServicesProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40006152-CH1-SW1), Apple
2. [Create Custom Dictionaries For Mac OSX](http://blog.nagpals.com/mac-dictionaries/), Indiver Nagpal
3. [Emojipedia](https://github.com/gingerbeardman/Emojipedia)

## Lisence 
1. cedict is downloaded from https://cc-cedict.org/, lisenced under [Creative Commons Attribution-Share Alike 3.0 License](https://creativecommons.org/licenses/by-sa/3.0/)
2. This project use `Mozilla Public License Version 2.0`
