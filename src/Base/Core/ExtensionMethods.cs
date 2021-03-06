﻿using System.Collections.Generic;

namespace Fusee.Base.Core
{
    /// <summary>
    /// A set of extension methods
    /// </summary>
    public static class ExtensionMethods
    {
        #region IEnumerable extension methods

        /// <summary>
        /// Bypasses a given number of elements in a sequence and returns the remaining. Alternative to LINQ's Skip().
        /// </summary>
        /// <param name="data">Source data</param>
        /// <param name="count">Number of elements to bypass.</param>
        /// <typeparam name="T">Type</typeparam>
        /// <returns></returns>
        public static IEnumerable<T> SkipItems<T>(this IEnumerable<T> data, int count)
        {
            var zwerg = new List<T>();
            zwerg.AddRange((List<T>)data);
            var i = 0;
            
            foreach (var t in data)
            {
                if (i < count)
                {
                    zwerg.RemoveAt(0);
                }
                else break;
                i++;
            }
            return zwerg;
        }

        /// <summary>
        /// Returns a specified number of contiguous elements from the start of a sequence. Alternative to LINQ's Take().
        /// </summary>
        /// <param name="data">Source data.</param>
        /// <param name="count">Number of elements to take.</param>
        /// <typeparam name="T">Tye</typeparam>
        /// <returns></returns>
        public static IEnumerable<T> TakeItems<T>(this IEnumerable<T> data, int count)
        {
            var items = new List<T>();
            var i = 0;

            foreach (var t in data)
            {
                if (i < count)
                {
                    items.Add(t);
                }
                else break;
                i++;
            }
            return items;
        }

        /// <summary>
        /// Returns the last item of a sequence. Alternative to LINQ's Last()
        /// </summary>
        /// <param name="data">Source data</param>
        /// <typeparam name="T">Type</typeparam>
        /// <returns></returns>
        public static T LastItem<T>(this IEnumerable<T> data)
        {
            var temp = default(T);
            var iEnum = data.GetEnumerator();
            while (iEnum.MoveNext())
            {
                temp = iEnum.Current;
            }

            return temp;
        }

        /// <summary>
        /// Determines whether two sequences are equal by comparing the elements. Alternative to LINQ's SequenceEqual().
        /// </summary>
        /// <param name="source">Source data</param>
        /// <param name="compObj">Data with which the comparison is to be carried out.</param>
        /// <typeparam name="T">Type</typeparam>
        /// <returns></returns>
        public static bool SequEqual<T>(this IEnumerable<T> source, IEnumerable<T> compObj)
        {
            var enum1 = source.GetEnumerator();
            var enum2 = compObj.GetEnumerator();
            var count1 = 0;
            var count2 = 0;

            while (enum1.MoveNext())
            {
                count1++;
            }
            enum1.Reset();
            while (enum2.MoveNext())
            {
                count2++;
            }
            enum2.Reset();

            if (count1 != count2) return false;

            while (enum1.MoveNext() && enum2.MoveNext())
            {
                if (!enum1.Current.Equals(enum2.Current))
                    return false;
            }
            return true;
        }
        #endregion
    }
}
