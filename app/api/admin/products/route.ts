import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

export async function GET() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const products = await db.collection('products').find({}).toArray();
    return NextResponse.json(products);
  } finally {
    await client.close();
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection('products').insertOne(data);
    const insertedProduct = await db.collection('products').findOne({ _id: result.insertedId });
    return NextResponse.json(insertedProduct, { status: 201 });
  } finally {
    await client.close();
  }
}
