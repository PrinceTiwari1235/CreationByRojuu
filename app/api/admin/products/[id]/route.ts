import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    await db.collection('products').deleteOne({ _id: new ObjectId(params.id) });
    return NextResponse.json({ message: 'Product deleted' });
  } finally {
    await client.close();
  }
}
