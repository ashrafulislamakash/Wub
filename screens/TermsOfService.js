import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView, Linking } from 'react-native'

const TermsOfService = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}

            >
                <Text style={styles.headerText}>
                    Please know the terms well before using.{"\n"}
                    অনুগ্রহ করে  ব্যবহার করার পূর্বে শর্তাবলী সম্পর্কে ভালো ভাবে জেনে নিন।
                </Text>

                <Text style={styles.text}>
                    {"\n"}1. No pornographic pictures / videos / posts can be given. Any such post will be deleted and the member's account may be suspended.
                    {"\n"}কোন অশ্লীল ছবি/ভিডিও/পোস্ট দেয়া যাবেনা। এ ধরনের কোন পোস্ট কেউ করলে তা ডিলিট করা হবে এবং মেম্বারের একাউন্ট সাসপেন্ড করা হতে পারে।
                </Text>

                <Text style={styles.text}>
                    {"\n"}2.Members are responsible for complying with all applicable laws when uploading posts, photos, videos.
                    If the content of your posts, photos, videos is illegal and contains false information, the Jeevanpata Authority is not responsible for it.
                    {"\n"}পোস্ট, ছবি, ভিডিও আপলোড করার সময় প্রযোজ্য সকল আইনকানুন মেনে চলার দায়িত্ব বর্তায় মেম্বারদের উপর।
                    আপনার করা পোস্ট, ছবি, ভিডিওর  বিষয়বস্তু বেআইনি হলে এবং এতে অসত্য তথ্য থাকলে এর জন্য জীবনপাতা কর্তৃপক্ষ দায়বদ্ধ নয়।

                </Text>
                <Text style={styles.text}>
                    {"\n"}{"\n"}3. If a member violates any law of the country or commits a criminal offense through his post, photo or video and if the law enforcement authorities want information about his account,
                    the World University of Bangladesh authorities will cooperate with the law enforcement agency with any information related to the account.
                    {"\n"} কোন মেম্বার যদি তার পোস্ট, ছবি বা ভিডিওর মাধ্যমে যদি দেশের কোন আইন ভঙ্গ করেন বা কোন ফোজদারী অপরাধ করেন এবং আইনপ্রয়োগকারী কর্তৃপক্ষ যদি তার একাউন্ট সম্পর্কিত তথ্য চান তাহলে World University of Bangladesh কর্তৃপক্ষ আইনপ্রয়োগকারী সংস্থাকে একাউন্ট সম্পর্কিত যেকোন তথ্য দিয়ে সহযোগীতা করবে।

                </Text>
                <Text style={styles.text}>
                    {"\n"}4. WUB may contain links or references to other websites. The World University of Bangladesh will not be responsible for any content on the third party website.
                    Third party websites are not investigated or monitored. From the moment the user leaves the World University of Bangladesh and enters the third party site, the user stays there at his own risk.

                    {"\n"}WUB অন্য ওয়েবসাইট - এর লিংক বা রেফারেন্স উল্লেখ থাকতে পারে। তৃতীয় পক্ষের ওয়েবসাইটের কোনো বিষয়বস্তুর জন্য World University of Bangladesh দায়ী থাকবে না।
                    তৃতীয় পক্ষের ওয়েবসাইটের উপর তদন্ত করা বা নজর রাখা হয় না। যেই মুহূর্তে ব্যবহারকারী World University of Bangladesh ছেড়ে তৃতীয় পক্ষের সাইটে প্রবেশ করেন সেই মুহূর্ত থেকে ব্যবহারকারী তাঁর নিজ ঝুঁকিতে সেখানে অবস্থান করেন।
                </Text>

                <Text style={styles.text} >

                    {"\n"}5. No post can be given insulting any religion.
                    {"\n"}কোন ধর্মকে হেয় করে কোন পোস্ট দেয়া যাবেনা।
                </Text>

                <Text style={styles.linkText} onPress={() => Linking.openURL('https://wub.edu.bd/')}>

                    Learn more details.
                    {"\n"}আরো বিস্তারিত জানুন
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
}



export default TermsOfService;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3EDF7',
    },
    scrollView: {
        marginHorizontal: 20,
    },
    text: {
        fontSize: 18,
    },
    headerText: {
        fontSize: 20,
    },
    linkText: {
        fontSize: 20,
        color: 'blue',
        marginVertical: 20
    },
});