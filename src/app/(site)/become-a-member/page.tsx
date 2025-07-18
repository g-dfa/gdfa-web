"use client"

import type React from "react"
import {useState} from "react"
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Checkbox} from "@/components/ui/checkbox"
import {User, Mail, Phone, MapPin, Droplet, Check, Loader2} from "lucide-react"

// Define the location data structure
const locations = {
    Rangpur: {
        Dinajpur: [
            "Dinajpur Sadar",
            "Birampur",
            "Biral",
            "Bochaganj",
            "Chirirbandar",
            "Phulbari",
            "Ghoraghat",
            "Hakimpur",
            "Kaharole",
            "Khansama",
            "Nawabganj",
            "Parbatipur",
        ],
        Thakurgaon: [
            "Thakurgaon Sadar",
            "Baliadangi",
            "Haripur",
            "Pirganj",
            "Ranisankail"
        ],
        Panchagarh: [
            "Panchagarh Sadar",
            "Atwari",
            "Boda",
            "Debiganj",
            "Tetulia"
        ],
    },
}

export default function BecomeMember() {
    const initialAddressState = {
        address_line_1: "",
        address_line_2: "",
        upazila: "",
        district: "",
        division: "Rangpur",
        postal_code: "",
        country: "Bangladesh",
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        bloodGroup: "",
        presentAddress: initialAddressState,
        permanentAddress: initialAddressState,
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSameAsPresentAddress, setIsSameAsPresentAddress] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value, name} = e.target
        if (name.startsWith("presentAddress.") || name.startsWith("permanentAddress.")) {
            const [addressType, field] = name.split(".")
            setFormData((prev) => ({
                ...prev,
                [addressType]: {
                    ...prev[addressType as "presentAddress" | "permanentAddress"],
                    [field]: value,
                },
            }))
        } else {
            setFormData((prev) => ({...prev, [name]: value}))
        }
    }

    const handleAddressSelectChange = (
        value: string,
        fieldName: "district" | "upazila" | "division" | "country",
        addressType: "presentAddress" | "permanentAddress",
    ) => {
        setFormData((prev) => {
            const newAddress = {...prev[addressType], [fieldName]: value}
            if (fieldName === "district") {
                newAddress.upazila = ""
            }
            return {
                ...prev,
                [addressType]: newAddress,
            }
        })
    }

    const handleBloodGroupSelectChange = (value: string) => {
        setFormData((prev) => ({...prev, bloodGroup: value}))
    }

    const handleSameAsPresentAddressChange = (checked: boolean) => {
        setIsSameAsPresentAddress(checked)
        if (checked) {
            setFormData((prev) => ({
                ...prev,
                permanentAddress: {...prev.presentAddress},
            }))
        } else {
            setFormData((prev) => ({
                ...prev,
                permanentAddress: initialAddressState,
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setIsSubmitted(true)

        setFormData({
            name: "", email: "", phone: "", bloodGroup: "",
            presentAddress: {
                address_line_1: "",
                address_line_2: "",
                upazila: "",
                district: "",
                division: "Rangpur",
                postal_code: "",
                country: "Bangladesh"
            },
            permanentAddress: {
                address_line_1: "",
                address_line_2: "",
                upazila: "",
                district: "",
                division: "Rangpur",
                postal_code: "",
                country: "Bangladesh"
            }
        });
    }

    if (isSubmitted) {
        return (

            <div className="py-16 lg:py-24">
                <div className="container px-4 mx-auto max-w-2xl">
                    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-blue-50/50">
                        <CardContent className="p-8 text-center">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <Check className="w-8 h-8 text-white"/>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Registration Successful!</h3>
                            <p className="text-lg text-gray-600 mb-6">
                                Thank you for registering. We&#39;ve received your application and will get back to you
                                shortly.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }

    const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    const districts = Object.keys(locations.Rangpur)
    const divisions = ["Rangpur"]
    const countries = ["Bangladesh"]

    return (
        <div className="py-16 lg:py-24">
            <div className="container px-4 mx-auto max-w-3xl">
                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="text-center pb-6">
                        <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Become a
                            Member</CardTitle>
                        <CardDescription className="text-lg text-gray-600 max-w-md mx-auto">
                            Join the Greater Dinajpur Freelancer Association and unlock a world of opportunities.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 lg:p-8 space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        <User className="inline-block w-4 h-4 mr-2 text-[var(--gdfa-secondary)]"/>
                                        Full Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="border-gray-200 focus:border-[var(--gdfa-secondary)]focus:ring-gdfa-secondary/20"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        <Mail className="inline-block w-4 h-4 mr-2 text-[var(--gdfa-secondary)]"/>
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        <Phone className="inline-block w-4 h-4 mr-2 text-[var(--gdfa-secondary)]"/>
                                        Phone Number
                                    </label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+880 1XXXXXXXX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]20"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="bloodGroup"
                                           className="block text-sm font-medium text-gray-700 mb-2">
                                        <Droplet className="inline-block w-4 h-4 mr-2 text-[var(--gdfa-secondary)]"/>
                                        Blood Group
                                    </label>
                                    <Select value={formData.bloodGroup} onValueChange={handleBloodGroupSelectChange}
                                            required>
                                        <SelectTrigger id="bloodGroup"
                                                       className="w-full border-gray-200 focus:ring-[var(--gdfa-secondary)]/20">
                                            <SelectValue placeholder="Select your blood group"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {bloodGroups.map((group) => (
                                                <SelectItem key={group} value={group}>
                                                    {group}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Present Address Section */}
                            <div className="space-y-4 border-t pt-6 border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-[var(--gdfa-secondary)]"/> Present Address
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="presentAddress.address_line_1"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Address Line 1
                                        </label>
                                        <Input
                                            id="presentAddress.address_line_1"
                                            name="presentAddress.address_line_1"
                                            placeholder="House No., Street Name"
                                            value={formData.presentAddress.address_line_1}
                                            onChange={handleChange}
                                            required
                                            className="border-gray-200 focus:border-gdfa-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="presentAddress.address_line_2"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Address Line 2 (Optional)
                                        </label>
                                        <Input
                                            id="presentAddress.address_line_2"
                                            name="presentAddress.address_line_2"
                                            placeholder="Apartment, Suite, etc."
                                            value={formData.presentAddress.address_line_2}
                                            onChange={handleChange}
                                            className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <label htmlFor="presentAddress.division"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Division
                                        </label>
                                        <Select
                                            value={formData.presentAddress.division}
                                            onValueChange={(value) => handleAddressSelectChange(value, "division", "presentAddress")}
                                            required
                                            disabled
                                        >
                                            <SelectTrigger
                                                id="presentAddress.division"
                                                className="w-full border-gray-200 focus:ring-[var(--gdfa-secondary)]/20"
                                            >
                                                <SelectValue placeholder="Select Division"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {divisions.map((div) => (
                                                    <SelectItem key={div} value={div}>
                                                        {div}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label htmlFor="presentAddress.district"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            District
                                        </label>
                                        <Select
                                            value={formData.presentAddress.district}
                                            onValueChange={(value) => handleAddressSelectChange(value, "district", "presentAddress")}
                                            required
                                        >
                                            <SelectTrigger
                                                id="presentAddress.district"
                                                className="w-full border-gray-200 focus:ring-[var(--gdfa-secondary)]/20"
                                            >
                                                <SelectValue placeholder="Select District"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {districts.map((dist) => (
                                                    <SelectItem key={dist} value={dist}>
                                                        {dist}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label htmlFor="presentAddress.upazila"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Upazila
                                        </label>
                                        <Select
                                            value={formData.presentAddress.upazila}
                                            onValueChange={(value) => handleAddressSelectChange(value, "upazila", "presentAddress")}
                                            required
                                            disabled={!formData.presentAddress.district}
                                        >
                                            <SelectTrigger
                                                id="presentAddress.upazila"
                                                className="w-full border-gray-200 focus:ring-[var(--gdfa-secondary)]/20"
                                            >
                                                <SelectValue placeholder="Select Upazila"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {formData.presentAddress.district &&
                                                    locations.Rangpur[formData.presentAddress.district as keyof typeof locations.Rangpur]?.map(
                                                        (upazila) => (
                                                            <SelectItem key={upazila} value={upazila}>
                                                                {upazila}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="presentAddress.postal_code"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Postal Code
                                        </label>
                                        <Input
                                            id="presentAddress.postal_code"
                                            name="presentAddress.postal_code"
                                            placeholder="e.g., 5200"
                                            value={formData.presentAddress.postal_code}
                                            onChange={handleChange}
                                            className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="presentAddress.country"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Country
                                        </label>
                                        <Select
                                            value={formData.presentAddress.country}
                                            onValueChange={(value) => handleAddressSelectChange(value, "country", "presentAddress")}
                                            required
                                            disabled
                                        >
                                            <SelectTrigger
                                                id="presentAddress.country"
                                                className="w-full border-gray-200 focus:ring-[var(--gdfa-secondary)]/20"
                                            >
                                                <SelectValue placeholder="Select Country"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {countries.map((country) => (
                                                    <SelectItem key={country} value={country}>
                                                        {country}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* Permanent Address Section */}
                            <div className="space-y-4 border-t pt-6 border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-[var(--gdfa-secondary)]"/> Permanent Address
                                </h3>
                                <div className="flex items-center space-x-2 mb-4">
                                    <Checkbox
                                        id="sameAsPresent"
                                        checked={isSameAsPresentAddress}
                                        onCheckedChange={handleSameAsPresentAddressChange}
                                    />
                                    <label
                                        htmlFor="sameAsPresent"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Same as Present Address
                                    </label>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="permanentAddress.address_line_1"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Address Line 1
                                        </label>
                                        {isSameAsPresentAddress ? (
                                            <Input
                                                id="permanentAddress.address_line_1"
                                                name="permanentAddress.address_line_1"
                                                value={formData.permanentAddress.address_line_1}
                                                disabled
                                                className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                            />
                                        ) : (
                                            <Input
                                                id="permanentAddress.address_line_1"
                                                name="permanentAddress.address_line_1"
                                                placeholder="House No., Street Name"
                                                value={formData.permanentAddress.address_line_1}
                                                onChange={handleChange}
                                                required
                                                className="border-gray-200 focus:border-[var(--gdfa-secondary)]focus:ring-[var(--gdfa-secondary)]/20"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="permanentAddress.address_line_2"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Address Line 2 (Optional)
                                        </label>
                                        {isSameAsPresentAddress ? (
                                            <Input
                                                id="permanentAddress.address_line_2"
                                                name="permanentAddress.address_line_2"
                                                value={formData.permanentAddress.address_line_2}
                                                disabled
                                                className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                            />
                                        ) : (
                                            <Input
                                                id="permanentAddress.address_line_2"
                                                name="permanentAddress.address_line_2"
                                                placeholder="Apartment, Suite, etc."
                                                value={formData.permanentAddress.address_line_2}
                                                onChange={handleChange}
                                                className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <label htmlFor="permanentAddress.division"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Division
                                        </label>
                                        <Select
                                            value={formData.permanentAddress.division}
                                            onValueChange={(value) => handleAddressSelectChange(value, "division", "permanentAddress")}
                                            required
                                            disabled // Division is fixed to Rangpur
                                        >
                                            <SelectTrigger
                                                id="permanentAddress.division"
                                                className="w-full border-gray-200 focus:ring-[var(--gdfa-secondary)]/20"
                                            >
                                                <SelectValue placeholder="Select Division"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {divisions.map((div) => (
                                                    <SelectItem key={div} value={div}>
                                                        {div}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label htmlFor="permanentAddress.district"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            District
                                        </label>
                                        {isSameAsPresentAddress ? (
                                            <Input
                                                id="permanentAddress.district"
                                                name="permanentAddress.district"
                                                value={formData.permanentAddress.district}
                                                disabled
                                                className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                            />
                                        ) : (
                                            <Select
                                                value={formData.permanentAddress.district}
                                                onValueChange={(value) => handleAddressSelectChange(value, "district", "permanentAddress")}
                                                required
                                                disabled={!formData.permanentAddress.district}
                                            >
                                                <SelectTrigger
                                                    id="permanentAddress.district"
                                                    className="w-full border-gray-200 focus:ring-[var(--gdfa-secondary)]/20"
                                                >
                                                    <SelectValue placeholder="Select District"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {districts.map((dist) => (
                                                        <SelectItem key={dist} value={dist}>
                                                            {dist}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="permanentAddress.upazila"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Upazila
                                        </label>
                                        {isSameAsPresentAddress ? (
                                            <Input
                                                id="permanentAddress.upazila"
                                                name="permanentAddress.upazila"
                                                value={formData.permanentAddress.upazila}
                                                disabled
                                                className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                            />
                                        ) : (
                                            <Select
                                                value={formData.permanentAddress.upazila}
                                                onValueChange={(value) => handleAddressSelectChange(value, "upazila", "permanentAddress")}
                                                required
                                                disabled={!formData.permanentAddress.district}
                                            >
                                                <SelectTrigger
                                                    id="permanentAddress.upazila"
                                                    className="w-full border-gray-200 focus:ring-[var(--gdfa-secondary)]/20"
                                                >
                                                    <SelectValue placeholder="Select Upazila"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {formData.permanentAddress.district &&
                                                        locations.Rangpur[formData.permanentAddress.district as keyof typeof locations.Rangpur]?.map(
                                                            (upazila) => (
                                                                <SelectItem key={upazila} value={upazila}>
                                                                    {upazila}
                                                                </SelectItem>
                                                            ),
                                                        )}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="permanentAddress.postal_code"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Postal Code
                                        </label>
                                        {isSameAsPresentAddress ? (
                                            <Input
                                                id="permanentAddress.postal_code"
                                                name="permanentAddress.postal_code"
                                                value={formData.permanentAddress.postal_code}
                                                disabled
                                                className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                            />
                                        ) : (
                                            <Input
                                                id="permanentAddress.postal_code"
                                                name="permanentAddress.postal_code"
                                                placeholder="e.g., 5200"
                                                value={formData.permanentAddress.postal_code}
                                                onChange={handleChange}
                                                className="border-gray-200 focus:border-[var(--gdfa-secondary)] focus:ring-[var(--gdfa-secondary)]/20"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="permanentAddress.country"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Country
                                        </label>
                                        <Select
                                            value={formData.permanentAddress.country}
                                            onValueChange={(value) => handleAddressSelectChange(value, "country", "permanentAddress")}
                                            required
                                            disabled
                                        >
                                            <SelectTrigger
                                                id="permanentAddress.country"
                                                className="w-full border-gray-200 focus:ring-[var(--gdfa-secondary)]/20"
                                            >
                                                <SelectValue placeholder="Select Country"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {countries.map((country) => (
                                                    <SelectItem key={country} value={country}>
                                                        {country}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] hover:from-gdfa-primary hover:to-[var(--gdfa-secondary)] text-white shadow-lg hover:shadow-xl transform hover:scale-[1.005] transition-all duration-300 text-lg rounded-lg"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin"/>
                                        <span>Submitting...</span>
                                    </div>
                                ) : (
                                    <span>Register Now</span>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
