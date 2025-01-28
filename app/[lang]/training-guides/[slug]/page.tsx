import { getDictionary } from "../../dictionaries"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function GuidePage({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  const dict = await getDictionary(lang)

  const guides = {
    "puppy-training-101": {
      title: "Puppy Training 101",
      content: [
        {
          title: "Introduction",
          text: "Welcome to our comprehensive guide on puppy training. This guide will cover everything you need to know to get started with training your new puppy.",
        },
        {
          title: "1. Establishing a Routine",
          text: "One of the most important aspects of puppy training is establishing a consistent routine. This includes regular feeding times, potty breaks, playtime, and training sessions.",
        },
        {
          title: "2. House Training",
          text: "House training is often one of the first and most important lessons for your puppy. Consistency and positive reinforcement are key to success.",
        },
        {
          title: "3. Basic Commands",
          text: "Start with simple commands like 'sit', 'stay', and 'come'. Use positive reinforcement techniques such as treats and praise to encourage good behavior.",
        },
        {
          title: "4. Socialization",
          text: "Expose your puppy to a variety of people, animals, and environments to help them become well-adjusted adults.",
        },
        {
          title: "5. Handling and Grooming",
          text: "Get your puppy used to being handled and groomed from an early age. This will make future vet visits and grooming sessions much easier.",
        },
      ],
    },
    "behavior-modification": {
      title: "Behavior Modification Techniques",
      content: [
        {
          title: "Introduction",
          text: "This guide covers effective strategies for addressing common behavioral issues in dogs.",
        },
        {
          title: "1. Understanding the Behavior",
          text: "Before attempting to modify a behavior, it's crucial to understand why your dog is exhibiting that behavior. Consult with a professional if needed.",
        },
        {
          title: "2. Positive Reinforcement",
          text: "Reward good behavior with treats, praise, or toys. This encourages your dog to repeat the desired behavior.",
        },
        {
          title: "3. Redirecting Unwanted Behavior",
          text: "When your dog displays unwanted behavior, redirect their attention to a more appropriate activity or command.",
        },
        {
          title: "4. Consistency",
          text: "Consistency is key in behavior modification. Ensure all family members are on the same page with training methods and rules.",
        },
        {
          title: "5. Patience and Persistence",
          text: "Behavior modification takes time. Be patient and persistent in your training efforts.",
        },
      ],
    },
  }

  const guide = guides[slug as keyof typeof guides]

  if (!guide) {
    notFound()
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">{guide.title}</h1>
      <div className="space-y-8">
        {guide.content.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{section.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

