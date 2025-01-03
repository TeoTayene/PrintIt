import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import StarRating from 'react-native-star-rating-widget';
import { useSelector } from "react-redux";

export default function Profile() {

    const theme = useSelector((state) => state.theme.mode);
    const colorTheme = theme === "light" ? "black" : "white";
    const themedBackgroundColor = theme === "light" ? "#F9F9F9" : "#2D2D2D";
    const cardTheme = theme === "light" ? "#FFF" : "#424242";

    const user = {
        user_id: 1,
        name: "Kristin Watson",
        email: "kristin.watson@example.com",
        password: "password123",
        address: "123 Main St, Cincinnati, OH",
        bank_account: "US123456789012345",
        profileImage: "https://via.placeholder.com/100",
    };

    const reviews = [
        { review_id: 1, rating: 5, comment: "Excellent produit, très satisfait.", seller_id: 1 },
        { review_id: 2, rating: 4, comment: "Bon produit, mais livraison un peu lente.", seller_id: 1 },
        { review_id: 3, rating: 3, comment: "Qualité correcte mais peut être améliorée.", seller_id: 1 },
        { review_id: 4, rating: 5, comment: "Parfait, je recommande vivement.", seller_id: 1 },
        { review_id: 5, rating: 2, comment: "Produit décevant, ne correspond pas à la description.", seller_id: 1 },
    ];

    const products = [
        { product_id: 1, name: "Modulateur évier", date: "23/10/2024", image: "https://via.placeholder.com/50" },
        { product_id: 2, name: "Porte-savon", date: "23/10/2024", image: "https://via.placeholder.com/50" },
    ];

    const calculateAverageRating = () => {
        const totalRatings = reviews.reduce((acc, review) => acc + review.rating, 0);
        return Math.round(totalRatings / reviews.length);
    };

    const countReviews = () => {
        return reviews.length;
    }

    const renderProduct = ({ item }) => (
        <View style={[styles.productCard, { backgroundColor: cardTheme }]}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={[styles.productName, { color: colorTheme }]}>{item.name}</Text>
                <Text style={[styles.productDate, { color: colorTheme }]}>{item.date}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: themedBackgroundColor }]}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: cardTheme }]}>
                <Image source={require('../assets/printit_logo.png')} style={styles.logo} />
            </View>

            {/* Profile Section */}
            <View style={[styles.profileSection, { backgroundColor: cardTheme }]}>
                <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
                <Text style={[styles.profileName, { color: colorTheme }]}>{user.name}</Text>
                <Text style={[styles.profileLocation, { color: colorTheme }]}>{user.address}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={[styles.impressionsText, { color: colorTheme }]}>{countReviews()} impressions</Text>
                    <StarRating
                        rating={calculateAverageRating()}
                        onChange={() => {}}
                        starSize={30}
                        color="#FFD700"
                        style={styles.starRating}
                    />
                </View>
            </View>
            {/* Models Section */}
            <Text style={[styles.sectionTitle, { color: colorTheme }]}>Modèles</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.product_id.toString()}
                renderItem={renderProduct}
                contentContainerStyle={styles.productList}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#EAEAEA",
    },
    logo: {
        width: 40,
        height: 40,
    },
    profileSection: {
        alignItems: "center",
        padding: 20,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 22,
        fontWeight: "bold",
    },
    profileLocation: {
        fontSize: 14,
        marginBottom: 10,
    },
    ratingContainer: {
        alignItems: "center",
        marginVertical: 10,
    },
    impressionsText: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight: "bold",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 20,
    },
    productList: {
        paddingHorizontal: 10,
    },
    productCard: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    productDate: {
        fontSize: 12,
    },
});
